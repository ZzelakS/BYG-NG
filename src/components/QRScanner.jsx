// src/components/QRScanner.js
import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { db, doc, getDoc, updateDoc } from "../firebase";

const QRScanner = () => {
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("black");
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5Qrcode("qr-reader");
    scannerRef.current = scanner;

    const startScanner = () => {
      scanner
        .start(
          { facingMode: "environment" },
          { fps: 10, qrbox: 250 },
          async (decodedText) => {
            scanner.stop(); // Stop scanner after successful read
            setStatus("Checking database...");
            setColor("black");

            try {
              // Extract unique_id from full URL or use raw code
              const match = decodedText.match(/\/invite\/([^/?#]+)/);
              const unique_id = match ? match[1] : decodedText;

              const inviteeRef = doc(db, "party_invitees", unique_id);
              const docSnap = await getDoc(inviteeRef);

              if (docSnap.exists()) {
                const data = docSnap.data();

                if (data.checked_in) {
                  setStatus(`Already checked in: ${data.name}`);
                  setColor("orange");
                } else {
                  await updateDoc(inviteeRef, { checked_in: true });
                  setStatus(`Welcome, ${data.name}! ✅`);
                  setColor("green");
                }

                // Show tooltip, then redirect
                setTimeout(() => {
                  window.location.href = decodedText;
                }, 2500);
              } else {
                setStatus("Invalid QR code ❌");
                setColor("red");

                // Restart scanner after short delay
                setTimeout(() => {
                  setStatus("");
                  setColor("black");
                  startScanner();
                }, 3000);
              }
            } catch (error) {
              console.error("Firestore error:", error);
              setStatus("Error accessing database ❌");
              setColor("red");

              setTimeout(() => {
                setStatus("");
                setColor("black");
                startScanner();
              }, 3000);
            }
          }
        )
        .catch((err) => {
          console.error("Scanner start error:", err);
          setStatus("Camera error. Please check permissions.");
          setColor("red");
        });
    };

    startScanner();

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch((e) => {
          console.error("Scanner stop error:", e);
        });
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* ✅ Always visible logo for Safari compatibility */}
      <img
        src="/logo.png"
        alt="Party Logo"
        style={{ maxWidth: "100px", marginBottom: "10px" }}
      />
      <h2>Gate QR Scanner</h2>
      <div id="qr-reader" style={{ width: 300, margin: "auto" }}></div>
      <p style={{ marginTop: "20px", color, fontWeight: "bold" }}>{status}</p>
    </div>
  );
};

export default QRScanner;

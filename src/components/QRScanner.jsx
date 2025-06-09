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
            scanner.stop(); // stop scanning on successful read

            // Show message immediately
            setStatus("Processing QR code...");
            setColor("black");

            // If decodedText looks like a URL
            if (decodedText.startsWith("http")) {
              setStatus(`Redirecting to ${decodedText} ...`);
              setColor("blue");

              // Wait 2 seconds so user sees tooltip, then redirect
              setTimeout(() => {
                window.location.href = decodedText;
              }, 2000);
              return; // exit early, no Firestore check needed
            }

            // Not a URL — check Firestore as invite ID
            try {
              const match = decodedText.match(/\/invite\/([a-zA-Z0-9_-]+)/);
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
              } else {
                setStatus("Invalid QR code ❌");
                setColor("red");
              }
            } catch (error) {
              console.error("Firestore error:", error);
              setStatus("Error accessing database");
              setColor("red");
            }

            // Restart scanning after 3 seconds so user sees message
            setTimeout(() => {
              setStatus("");
              setColor("black");
              startScanner();
            }, 3000);
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
      <h2>Gate QR Scanner</h2>
      <div id="qr-reader" style={{ width: 300, margin: "auto" }}></div>
      <p style={{ marginTop: 20, color, fontWeight: "bold" }}>{status}</p>
    </div>
  );
};

export default QRScanner;

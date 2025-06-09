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

            // Restart scanning after 3 seconds
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
      <p style={{ marginTop: "20px", color }}>{status}</p>
    </div>
  );
};

export default QRScanner;

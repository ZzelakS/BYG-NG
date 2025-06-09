import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { db, doc, getDoc, updateDoc } from "../firebase";

const QRScanner = () => {
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("black");
  const scannerRef = useRef(null);
  const html5QrcodeScannerRef = useRef(null);

  useEffect(() => {
    const scannerId = "qr-reader";
    scannerRef.current = document.getElementById(scannerId);

    if (!scannerRef.current) {
      console.error("QR div not mounted.");
      return;
    }

    html5QrcodeScannerRef.current = new Html5Qrcode(scannerId);

    const startScanner = () => {
      html5QrcodeScannerRef.current
        .start(
          { facingMode: "environment" },
          { fps: 10, qrbox: 250 },
          async (decodedText) => {
            try {
              await html5QrcodeScannerRef.current.stop();
              const inviteeRef = doc(db, "party_invitees", decodedText);
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

              setTimeout(() => {
                setStatus("");
                setColor("black");
                startScanner(); // Restart scanning
              }, 3000);
            } catch (err) {
              console.error("Scanner handler error:", err);
              setStatus("Unexpected error occurred.");
              setColor("red");
            }
          }
        )
        .catch((err) => {
          console.error("Failed to start QR scanner:", err);
          setStatus("Camera error. Please allow access.");
          setColor("red");
        });
    };

    startScanner();

    return () => {
      html5QrcodeScannerRef.current
        ?.stop()
        .catch((e) => console.warn("Stop error:", e));
    };
  }, []);

  return (
    <div style={{ textAlign: "center", paddingTop: "80px" }}>
      <h2 style={{ marginBottom: "20px" }}>Gate QR Scanner</h2>
      <div id="qr-reader" style={{ width: 300, margin: "auto" }}></div>
      <p style={{ marginTop: "20px", color, fontWeight: "bold" }}>{status}</p>
    </div>
  );
};

export default QRScanner;

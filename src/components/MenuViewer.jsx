import React from "react";

const FlipbookViewer = ({ flipbookUrl }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "20",
        width: "100%",
        height: "1100px",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          border: "none",
          width: "100%",
          height: "100%",
          left: "0",
          top: "0",
        }}
        src={flipbookUrl}
        seamless="seamless"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default FlipbookViewer;
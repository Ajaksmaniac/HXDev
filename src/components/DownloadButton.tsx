import React from "react";
import Button from "react-bootstrap/Button";
import jsPDF from "jspdf";
import Config from "../config";
const DownloadButton = () => {
  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    doc.html(document.getElementsByClassName("resume")[0] as HTMLElement, {
      margin: [10, 20, 30, 0],
      x: 10,
      y: 10,
      windowWidth: 700,
      width: 490,

      html2canvas: {
        letterRendering: false,
        foreignObjectRendering: false,
        scale: 0.8,
      },

      async callback(doc) {
        doc.setCharSpace(2);
        doc.setFont("Helvetica");
        await doc.save("Aleksandar_Jovanov_Resume");
      },
    });
  };

  return (
    <>
      {Config.isMobile ? (
        <Button variant="primary" onClick={handleDownload}>
          Download Resume PDF
        </Button>
      ) : (
        <Button variant="primary" onClick={handleDownload} className={"w-25"}>
          Download Resume PDF
        </Button>
      )}
    </>
  );
};

export default DownloadButton;

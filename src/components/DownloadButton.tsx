import React from "react";
import Button from "react-bootstrap/Button";
import jsPDF from "jspdf";
import { doesNotReject } from "assert";

const DownloadButton = () => {
  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    // const doc = new jsPDF("landscape");

    // document.getElementsByClassName("resume")[0].set
    doc.html(document.getElementsByClassName("resume")[0] as HTMLElement, {
      margin: [10, 20, 30, 20],
      x: 10,
      y: 10,
      windowWidth: 700,
      width: 490,

      html2canvas: {
        letterRendering: false,
        foreignObjectRendering: false,
        scale: 0.8,
      },
      //   autoPaging: false,

      async callback(doc) {
        // doc.setFontSize(8);
        doc.setCharSpace(2);
        doc.setFont("Helvetica");
        console.log(doc.getFontList());
        await doc.save("pdf_name");
      },
    });
  };

  return (
    <Button variant="primary" onClick={handleDownload}>
      Download Resume PDF
    </Button>
  );
};

export default DownloadButton;

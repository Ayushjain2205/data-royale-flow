import React from "react";
import PdfAI from "./AI/PdfAI";
import ImageAI from "./AI/ImageAI";
import CsvAI from "./AI/CsvAI";

const AISwitch = ({ type }) => {
  switch (type) {
    case "pdf":
      return <PdfAI type={type} />;
    case "image":
      return <ImageAI type={type} />;
    case "csv":
      return <CsvAI type={type} />;
    default:
      return <PdfAI />;
  }
};

export default AISwitch;

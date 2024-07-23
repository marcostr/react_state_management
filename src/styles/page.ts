import { CSSProperties } from "react";

export const pageStyle: CSSProperties = {
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",

  backgroundColor: "#575550",
};

export const navbarStyle: CSSProperties = {
  backgroundColor: "#575550",
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const cardListStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "20rem",
  overflowY: "auto",
  overflowX: "hidden",
  backgroundColor: "#111111",
};

export const cardStyle: CSSProperties = {
  backgroundColor: "#f1f1f1",
  padding: "1px",
  margin: "1px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "flex-start",
  color: "black",
};

export const cardTitleStyle: CSSProperties = {
  fontSize: "20px",
  fontWeight: "bold",
  width: "100%",
  borderBottom: "1px solid #787774",
  textAlign: "left",
};

export const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  margin: "10px",
};

export const footerStyle: CSSProperties = {
  backgroundColor: "#575550",
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "20px",
};

export const headerListStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  backgroundColor: "black",
  color: "white",
};

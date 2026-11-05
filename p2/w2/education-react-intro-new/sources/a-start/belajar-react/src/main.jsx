// const {StrictMode} = require('react');
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Beda from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Beda />
  </StrictMode>
);

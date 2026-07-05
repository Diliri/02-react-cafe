// src/main.tsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.tsx";

const element = document.getElementById("root");

if (element !== null) {
  createRoot(element).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}


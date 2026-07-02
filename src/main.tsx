// src/main.tsx

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// src/main.tsx

import { createRoot } from "react-dom/client";
import App from "./components/App";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);


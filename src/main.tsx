import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./header";
import { Content } from "./content";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-poppins min-h-screen space-y-5 px-80 py-5">
      <Header />
      <Content />
    </div>
  </StrictMode>,
);

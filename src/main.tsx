import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./header";
import { Content } from "./content";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-poppins min-h-screen space-y-5 px-10 py-10 transition-all sm:px-10 md:px-10 lg:px-35 xl:px-80">
      <Header />
      <Content />
      {/* Footer con fecha de actualización */}
    </div>
  </StrictMode>,
);

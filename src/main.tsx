import { createRoot } from "react-dom/client";
import { MainRoutes } from "./app/MainRotes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
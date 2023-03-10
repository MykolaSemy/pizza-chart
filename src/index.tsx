import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

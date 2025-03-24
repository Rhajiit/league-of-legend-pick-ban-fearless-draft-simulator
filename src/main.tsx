import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import LocalPB from "./pages/local-pb.tsx";
import { Provider } from "react-redux";
import store from "./utils/redux/ban-champion/ban-champion.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/local" element={<LocalPB />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);

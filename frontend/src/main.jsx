import React from "react";
import ReactDOM from "react-dom/client";
import App from "./screens/Home/App.jsx";
import Global from "./styles/global.js";
import AppProvider from "./hooks/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
      <Global />
    </AppProvider>
  </React.StrictMode>
);

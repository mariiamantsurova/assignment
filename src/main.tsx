import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: import.meta.env.VITE_API_URL || "",
  clientId: import.meta.env.VITE_CLIENT_ID || "",
  appId: import.meta.env.VITE_APP_ID || "",
};
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
      <App />
    </FronteggProvider>
  );
} else {
  console.error("Root element not found");
}

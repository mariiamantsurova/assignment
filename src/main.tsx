import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: process.env.REACT_APP_API_URL || "",
  clientId: process.env.REACT_APP_API_KEY || "",
  appId: "732689f4-18cf-4fb9-856a-26bd4485b841",
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

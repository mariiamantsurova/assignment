import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-l2i78liy3yvn.frontegg.com",
  clientId: "ed5747ce-ae04-4f14-8bf5-dc3daa33a83d",
  appId: "732689f4-18cf-4fb9-856a-26bd4485b841",
};

const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  );
} else {
  console.error("Root element not found");
}

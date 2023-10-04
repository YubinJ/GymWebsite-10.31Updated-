import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./AuthContext";

import App from "./App";
import Navbar from "./components/Navbar";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const initialLoggedin = localStorage.getItem("loggedin") === "true";

root.render(
  <StrictMode>
    <ChakraProvider>
      <AuthProvider initialLoggedin={initialLoggedin}>
        <Navbar />
        <App />
      </AuthProvider>
    </ChakraProvider>
  </StrictMode>,
);

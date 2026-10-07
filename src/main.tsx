import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { CartContextProvider } from "./contexts/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartContextProvider>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </CartContextProvider>
  </StrictMode>,
);

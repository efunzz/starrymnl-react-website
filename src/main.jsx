import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

//routing between pages
import Homepage from "./routes/Homepage.jsx";
import FormPage from "./routes/FormPage.jsx";
import IllustrationPage from "./routes/IllustrationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />, // Directly rendering Home page
  },
  {
    path: "/formpage",
    element: <FormPage />, // Directly rendering Home page
  },
  {
    path: "/illustration",
    element: <IllustrationPage />, // Directly rendering Home page
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import Body from "./components/Body.jsx";
import { ChatdataContextProvider } from "../src/store/Chat-data-context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <NextUIProvider>
    <ChatdataContextProvider>
      <main className="dark text-foreground bg-background">
        <RouterProvider router={router} />
      </main>
    </ChatdataContextProvider>
  </NextUIProvider>
  // </StrictMode>
);

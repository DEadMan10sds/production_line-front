import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import App from './Demo.tsx'
import { Provider } from "react-redux";
import { store } from "./store/Store.ts";
import { Layout } from "./components/Layout.tsx";
import RenderFlow from "./RenderFlow.tsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RenderFlow />,
      },
      {
        path: "settings",
        element: <RenderFlow flowToRender="settings" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

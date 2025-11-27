import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import App from './Demo.tsx'
import { Provider } from "react-redux";
import { store } from "./store/Store.ts";
import { Layout } from "./components/general/Layout.tsx";
import RenderFlow from "./RenderFlow.tsx";
import { Login } from "./pages/Login.tsx";
import { UserLoader } from "./loaders/UserLoader.ts";
import { UsersManager } from "./pages/Users.tsx";
import { RoleGuard } from "./guards/RoleGuard.ts";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <Layout />,
    loader: UserLoader,
    children: [
      {
        index: true,
        element: <RenderFlow />,
      },
      {
        path: "settings",
        element: <RenderFlow flowToRender="settings" />,
      },
      {
        path: "users",
        loader: () => RoleGuard(["admin"]),
        element: <UsersManager />,
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

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { CountProvider } from "./contexts/CountContext.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import TimerPage from "./pages/Timer.tsx";
import { HOME, TIMER } from "./constants/routes.ts";
import Layout from "./components/Layout.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <App />,
          },
          {
            path: TIMER,
            element: <TimerPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CountProvider>
        <RouterProvider router={router} />
      </CountProvider>
    </AuthProvider>
  </StrictMode>
);

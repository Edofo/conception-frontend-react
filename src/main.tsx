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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: HOME,
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CountProvider>
          <RouterProvider router={router} />
        </CountProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);

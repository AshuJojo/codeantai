/**
 * @fileoverview Entry point for the React application.
 * 
 * This file sets up the main application by importing necessary modules,
 * creating a router with routes for different pages, and rendering the
 * application into the root DOM element.
 * 
 * @module main
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignIn from "./pages/SignIn.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";

/**
 * Defines the routes for the application.
 * 
 * @constant
 * @type {import("react-router").RouteObject[]}
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/",
        element: <SignIn />,
      },
    ],
  },
]);

/**
 * Renders the React application into the root DOM element.
 * 
 * @function
 * @name renderApp
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Timer from "./pages/Timer"
import StopWatch from "./pages/StopWatch"

const router = createBrowserRouter([
  { path: "/", element: <Timer /> },
  { path: "stopwatch", element: <StopWatch /> },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

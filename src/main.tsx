import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
  Question1,
  Question2,
  Question3,
  Question4, Question5,
} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/1", element: <Question1 /> },
      { path: "/2", element: <Question2 /> },
      { path: "/3", element: <Question3 /> },
      { path: "/4", element: <Question4 /> },
      { path: "/5", element: <Question5 /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

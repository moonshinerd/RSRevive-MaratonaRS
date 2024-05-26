import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Feed } from './pages/feed/index.jsx';
import { Landing } from './pages/landing/index.jsx';
import { Login } from './pages/login/index.jsx';
import './global.css'
import './responsive.css'

const router = createBrowserRouter([
  {
    path: "/teste",
    element: <Landing />
  },
  {
    path: "/",
    element: <Feed />
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

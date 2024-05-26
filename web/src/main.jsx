import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Feed } from './pages/feed/index.jsx';
import { Landing } from './pages/landing/index.jsx';
import './global.css'
import './responsive.css'
import { Home } from './pages/home/index.jsx';

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
    path: "/Home",
    element: <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

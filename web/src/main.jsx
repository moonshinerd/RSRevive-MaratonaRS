import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Feed } from './pages/feed/index.jsx';
import { Landing } from './pages/landing/index.jsx';
import { Login } from './pages/login/index.jsx';
import { Register } from './pages/register/index.jsx';
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
    path: "/home",
    element: <Home />
  },
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

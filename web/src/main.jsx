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
import { AboutUs } from './pages/aboutus/index.jsx';

const router = createBrowserRouter([
  {
    path: "/teste",
    element: <Landing />
  },
  {
    path: "/feed",
    element: <Feed />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
  ,
  {
    path: "/aboutus",
    element: <AboutUs />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

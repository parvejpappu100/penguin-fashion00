import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Main from './layouts/Main.jsx';
import AllProducts from './pages/AllProducts/AllProducts.jsx';
import Login from './pages/Login/Login.jsx';
import MyCart from './pages/MyCart/MyCart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "allProducts",
        element: <AllProducts></AllProducts>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "myCart",
        element: <MyCart></MyCart>
      }
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

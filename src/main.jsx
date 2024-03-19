import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from "./Component/Nav.jsx";
import Gameplay from './pages/GamePlay.jsx';
import HomePage from './pages/Homepage.jsx';
import Credit from './pages/Credit.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/credit",
    element: <Credit />,
  },
  {
    path: "/play",
    element: <Gameplay />,
  }, {
    path: "/home",
    element: <HomePage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

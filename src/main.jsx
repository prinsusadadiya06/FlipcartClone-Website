import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Home from './Home';
import Mobileproduct from './Mobileproduct'
import Login from './Login'
import Becomeaseller from './Becomeaseller'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Singlecomponent from './Singlecomponent'


let allproduct = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/card",
    element: <Mobileproduct />,
  },

  {
    path: "/card/Singlecomponent",
    element: <Singlecomponent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/becomeaseller",
    element: <Becomeaseller />,
  },



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allproduct} />
    </StrictMode>,
)

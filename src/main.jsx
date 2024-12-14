import React, { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

import Productlisting from './Productlisting.jsx'
import Products from './Products.jsx';
import ProductDetails from './ProductDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './routes/root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  
  children: [
    {path:"/",
      element: <Productlisting />,
      
    },
    {
      path:"/ProductDetails/:id",
    element: <ProductDetails />
    }
  
  ],
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ErrorPage from './components/ErrorPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    // errorElement: <ErrorPage />,
    children:[
      {index: true, element: <ProductList/>},
      {path: "cart", element: <Cart/>},

       
    ]

    
  },
  //  {
  //   path: "*", // 👈 catch-all for unmatched routes
  //   element: <ErrorPage />,
  //   },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <CartProvider>
    <>
      <RouterProvider router={router}/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

    </>

    </CartProvider>
  </React.StrictMode>
);



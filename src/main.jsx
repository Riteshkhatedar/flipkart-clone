import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/Fonts.css";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Filters from "./components/Filters.jsx";
import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/filters/:id",
        element: <Filters />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

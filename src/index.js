import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Store
import { Provider } from "react-redux";
import store from "./Store/Store";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

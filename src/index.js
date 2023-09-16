import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Store
import { Provider } from "react-redux";
import store from "./Store/Store";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

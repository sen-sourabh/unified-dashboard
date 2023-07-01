import {
    createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { UsersPage } from "../pages/users";
import { Products } from "../pages/products";
import { Categories } from "../pages/categories";
import { Orders } from "../pages/orders";
import { Carts } from "../pages/carts";
import { Wishlist } from "../pages/wishlists";
import App from "../App";
import { Settings } from "../pages/settings";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/users",
          element: <UsersPage />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/carts",
          element: <Carts />,
        },
        {
          path: "/wishlists",
          element: <Wishlist />,
        },{
          path: "/personalize",
          element: <Settings />,
        },
      ]
    },
]);
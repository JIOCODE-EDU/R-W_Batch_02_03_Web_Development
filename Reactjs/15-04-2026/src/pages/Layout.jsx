import React from "react";
import {
  createBrowserRouter,
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import Pages from "./Pages";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Pages.Home />,
      },
      {
        path: "/about",
        element: <Pages.AboutUs />,
      },
      {
        path: "/contact",
        element: <Pages.ContactUs />,
      },
      {
        path: "/login",
        element: <Pages.Login />,
      },
      {
        path: "/register",
        element: <Pages.Register />,
      },
      {
        path: "/faq",
        element: <Pages.Faq />,
      },
      {
        path: "/admin",
        element: <Pages.AdminUser />,
        children: [
          {
            path: "/admin/user1",
            element: <Pages.User1 />,
          },
          {
            path: "/admin/user2",
            element: <Pages.User2 />,
          },
        ],
      },
      {
        path: "*",
        element: <Pages.Error />,
      },
    ],
  },
]);

const Layout = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default Layout;

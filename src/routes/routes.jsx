import {
  Home,
  About,
  Contact,
  Courses,
  CoursesOpenPage,
  Login,
  Pricing,
  NotFound,
} from "../pages";

import RootLayout from "../layouts/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Routes = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "courses",
          children: [
            { index: true, element: <Courses /> },
            {
              path: ":id",
              element: <CoursesOpenPage />,
            },
          ],
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;

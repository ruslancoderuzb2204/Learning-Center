import {
  Home,
  About,
  Contact,
  Courses,
  CoursesOpenPage,
  Login,
  Pricing,
} from "../pages";

import RootLayout from "../layouts/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Routes = () => {
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

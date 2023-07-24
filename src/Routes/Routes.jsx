import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import Admission from "../pages/Admission/Admission";
import Colleges from "../pages/Colleges/Colleges";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyCollege from "../pages/MyCollege/MyCollege";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
        loader: () => fetch("https://campus-reserve.vercel.app/classes"),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollege",
        element: <MyCollege></MyCollege>,
      },
    ],
  },
]);

export default router;

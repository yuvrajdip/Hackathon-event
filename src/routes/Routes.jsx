import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import JobsAndInternship from "../pages/JobsAndInternship";
import Organizers from "../pages/Organizers";
import Hackthons from "../pages/Hackthons";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import HackathonDetails from "../pages/HackathonDetails";
import PrivateRoute from "../components/PrivateRoute";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Hackthons></Hackthons>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/hackthons/:blogId",
        element: <PrivateRoute>
          <HackathonDetails></HackathonDetails>,
        </PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/jobsandinternship",
        element: <PrivateRoute>
          <JobsAndInternship></JobsAndInternship>
        </PrivateRoute>
      },
      {
        path: "/organizers",
        element: <PrivateRoute>
          <Organizers></Organizers>
        </PrivateRoute>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])

export default router;
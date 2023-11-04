import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Assignments from "../Pages/Assignments";
import AssignmentDetails from "../Layouts/AssignmentDetails";
import CreateAssignment from "../Pages/CreateAssignment";
import UpdateAssignment from "../Pages/UpdateAssignment";
import SubmittedAssignments from "../Pages/SubmittedAssignments";
import MyAssignments from "../Pages/MyAssignments";
import HowItWorks from "../Pages/HowItWorks";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/assignment/:id",
        element: <AssignmentDetails />,
      },
      {
        path: "/create-assignment",
        element: <CreateAssignment />,
      },
      {
        path: "/update-assignment/:id",
        element: <UpdateAssignment />,
      },
      {
        path: "/submitted-assignments",
        element: <SubmittedAssignments />,
      },
      {
        path: "my-assignments",
        element: <MyAssignments />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default Routers;

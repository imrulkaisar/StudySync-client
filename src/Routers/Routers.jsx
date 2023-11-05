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
import PrivateRouter from "./PrivateRouter";

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
        element: (
          <PrivateRouter>
            <AssignmentDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/create-assignment",
        element: (
          <PrivateRouter>
            <CreateAssignment />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-assignment/:id",
        element: (
          <PrivateRouter>
            <UpdateAssignment />
          </PrivateRouter>
        ),
      },
      {
        path: "/submitted-assignments",
        element: (
          <PrivateRouter>
            <SubmittedAssignments />
          </PrivateRouter>
        ),
      },
      {
        path: "my-assignments",
        element: (
          <PrivateRouter>
            <MyAssignments />
          </PrivateRouter>
        ),
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

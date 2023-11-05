import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return null;
  }

  if (user && user.accessToken) {
    return children;
  } else {
    return <Navigate state={location} to="/login" />;
  }
};

export default PrivateRouter;

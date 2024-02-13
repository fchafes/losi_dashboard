import { useSelector } from "react-redux";
import { Navigate, Route, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useSelector(state => state.token.tokens);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
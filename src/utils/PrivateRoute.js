import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user.isAuthanticated) {
    return (
      <Navigate
        to="/auth"
        replace={true}
        state={{
          return_url: location.pathname + location.search,
        }}
      />
    );
  }

  return children;
}

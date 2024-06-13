import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useConnection } from "../context/ConnectionStatus";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  const { isOnline } = useConnection();

  if (!isOnline) {
    return (
      <Navigate
        to="/NoInternetConnection"
        replace={true}
        state={{
          return_url: location.pathname + location.search,
        }}
      />
    );
  }
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

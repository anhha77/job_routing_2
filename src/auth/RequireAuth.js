import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/sign_in" />;
  }
  return children;
}

export default RequireAuth;

import { ROUTES } from "@/api";
import { ROLES } from "@/constants/roles";
import { useAuthStore } from "@/zustand/store";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }: { allowedRoles: ROLES[] }) => {
  const { user } = useAuthStore();
  const location = useLocation();

  return user?.role && allowedRoles.includes(user.role as ROLES) ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.unauthorized} state={{ from: location }} replace />
  );
};

export default RequireAuth;

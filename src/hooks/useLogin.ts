import { API_ROUTES, ROUTES } from "@/api";
import { ROLES } from "@/constants/roles";
import { z } from "zod";
import { signInSchema } from "@/schemas/signInSchema";
import { useAuthStore } from "@/zustand/store";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAccessToken, setUser, clearStore } = useAuthStore();

  const login = async (credentials: z.infer<typeof signInSchema>) => {
    const response = await fetch(API_ROUTES.auth.login, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");
    clearStore();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("refreshToken", JSON.stringify(data.refreshToken));
      setAccessToken(data.accessToken);
      setUser(data.user);

      switch (data.user.role) {
        case ROLES.Customer:
          return navigate(ROUTES.home.index, { replace: true });
        case ROLES.Employee:
          return navigate(ROUTES.staff, { replace: true });
        case ROLES.Admin:
          return navigate(ROUTES.admin, { replace: true });
        default:
          return navigate(ROUTES.unauthorized, { replace: true });
      }
    }

    throw new Error(data.message);
  };

  return { login };
};

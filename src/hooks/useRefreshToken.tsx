import { useAuthStore } from "@/zustand/store";
import { API_ROUTES } from "@/api";

export const useRefreshToken = () => {
  const { setAccessToken, setUser } = useAuthStore();

  const refresh = async () => {
    const refreshTokenRaw = localStorage.getItem("refreshToken") ?? "";
    const userRaw = localStorage.getItem("user") ?? "";
    const refreshToken = JSON.parse(refreshTokenRaw);
    const user = JSON.parse(userRaw);

    const response = await fetch(API_ROUTES.auth.refresh, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      setAccessToken(data.accessToken);
      setUser(data.user);
    }
  };

  return { refresh };
};

import { API_ROUTES, ROUTES } from "@/api";
import { ROLES } from "@/constants/roles";
import { useAuthStore } from "@/zustand/store";
import { useNavigate } from "react-router-dom";
import { CreateRental } from "@/types";

export const useRental = () => {
  const navigate = useNavigate();
  const { accessToken, user } = useAuthStore();

  const create = async (rental: CreateRental) => {
    const response = await fetch(API_ROUTES.rentals.create, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(rental),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      switch (user?.role) {
        case ROLES.Customer:
          return navigate(ROUTES.home.vehiclesRental, { replace: true });
        case ROLES.Employee:
          return navigate(ROUTES.employees, { replace: true });
        case ROLES.Admin:
          return navigate(ROUTES.admin, { replace: true });
        default:
          return navigate(ROUTES.unauthorized, { replace: true });
      }
    }

    throw new Error(data.message);
  };

  return { create };
};

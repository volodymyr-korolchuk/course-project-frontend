import { API_ROUTES, ROUTES } from "@/api";
import { ROLES } from "@/constants/roles";
import { useAuthStore } from "@/zustand/store";
import { useNavigate } from "react-router-dom";
import { CreateRental } from "@/types";

export const useRental = () => {
  const navigate = useNavigate();
  const { accessToken, user } = useAuthStore();

  const create = async (rentalRaw: CreateRental) => {
    const { amountDue, ...rental } = rentalRaw;
    const rentalResponse = await fetch(API_ROUTES.rentals.create, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(rental),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await rentalResponse.json();

    if (!rentalResponse.ok) {
      throw new Error(data.message);
    }

    const invoiceResponse = await fetch(API_ROUTES.invoices.create, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        leasingId: data.id,
        amountDue: rentalRaw.amountDue,
        insuranceAmount: 250,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!invoiceResponse.ok) {
      throw new Error(data.message);
    }

    switch (user?.role) {
      case ROLES.Customer:
        return navigate(ROUTES.home.vehiclesRental, { replace: true });
      case ROLES.Employee:
        return navigate(ROUTES.employee.index, { replace: true });
      case ROLES.Admin:
        return navigate(ROUTES.admin, { replace: true });
      default:
        return navigate(ROUTES.unauthorized, { replace: true });
    }
  };

  const getTodaysPickups = async () => {
    const response = await fetch(API_ROUTES.rentals.todaysPickups, {
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  };

  const getAll = async () => {
    const response = await fetch(API_ROUTES.rentals.all, {
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  };

  const getTodaysReturns = async () => {
    const response = await fetch(API_ROUTES.rentals.todaysReturns, {
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  };

  const getTomorrowsPickups = async () => {
    const response = await fetch(API_ROUTES.rentals.tomorrowsPickups, {
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  };

  const getTomorrowsReturns = async () => {
    const response = await fetch(API_ROUTES.rentals.tomorrowsReturns, {
      mode: "cors",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.error);
  };

  return {
    create,
    getAll,
    getTodaysPickups,
    getTodaysReturns,
    getTomorrowsPickups,
    getTomorrowsReturns,
  };
};

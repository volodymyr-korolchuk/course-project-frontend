const BASE_URL = "http://localhost:5000";

export const API_ROUTES = {
  auth: {
    register: `${BASE_URL}/auth/register`,
    login: `${BASE_URL}/auth/login`,
    refresh: `${BASE_URL}/auth/refresh`,
  },
  home: {
    index: `${BASE_URL}/home`,
  },
  fleet: {
    all: `${BASE_URL}/fleet`,
    create: `${BASE_URL}/fleet`,
  },
  staff: {
    all: `${BASE_URL}/staff`,
    create: `${BASE_URL}/staff`,
  },
  rentals: {
    create: `${BASE_URL}/leasings`,
  },
};

export const ROUTES = {
  signIn: "/sign-in",
  signUp: "/sign-up",
  unauthorized: "/unauthorized",
  home: {
    index: "/home",
    vehiclesRental: "/home/vehicle-rental",
  },
  staff: "/staff",
  admin: "/admin",
};

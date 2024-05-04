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
    export: `${BASE_URL}/fleet/export`,
  },
  employee: {
    all: `${BASE_URL}/employees`,
    create: `${BASE_URL}/employees`,
  },
  rentals: {
    all: `${BASE_URL}/leasings`,
    create: `${BASE_URL}/leasings`,
    todaysPickups: `${BASE_URL}/leasings/todays-pickups`,
    todaysReturns: `${BASE_URL}/leasings/todays-returns`,
    tomorrowsPickups: `${BASE_URL}/leasings/tomorrows-pickups`,
    tomorrowsReturns: `${BASE_URL}/leasings/tomorrows-returns`,
  },
  users: {
    update: `${BASE_URL}/users`,
    staff: `${BASE_URL}/users/staff`,
  },
  customers: {
    all: `${BASE_URL}/customers`,
  },
  invoices: {
    all: `${BASE_URL}/invoices`,
    create: `${BASE_URL}/invoices`,
  },
  payments: {
    all: `${BASE_URL}/payments`,
    create: `${BASE_URL}/payments`,
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
  employee: {
    index: "/employee",
    leasings: "/employee/leasings",
    payments: "/employee/payments",
    calendar: "/employee/calendar",
    garage: "/employee/garage",
    vehicleProperties: "/employee/vehicle-properties",
    invoices: `/employee/invoices`,
    analytics: `/employee/analytics`,
  },
  admin: {
    index: "/admin",
    assignEmployee: "/admin/assign-employee",
    revokeAccess: "/admin/revoke-access",
  },
};

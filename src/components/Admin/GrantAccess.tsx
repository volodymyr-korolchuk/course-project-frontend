import { Customer } from "@/types";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { API_ROUTES } from "@/api";
import { useAuthStore } from "@/zustand/store";
import toast from "react-hot-toast";

const GrantAccess = () => {
  const { accessToken } = useAuthStore();
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(API_ROUTES.customers.all, {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setCustomers(data.reverse());
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    };

    fetchCustomers();
  }, []);

  const handleAssignAdmin = async (userId: number) => {
    try {
      const response = await fetch(`${API_ROUTES.users.update}/${userId}`, {
        method: "PATCH",
        mode: "cors",
        body: JSON.stringify({ roleId: 4 }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setCustomers(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {}
  };

  const handleAssignEmployee = async (userId: number) => {
    try {
      const response = await fetch(`${API_ROUTES.users.update}/${userId}`, {
        method: "PATCH",
        mode: "cors",
        body: JSON.stringify({ roleId: 3 }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setCustomers(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {}
  };

  return (
    <div className="p-4 flex w-full h-full">
      <div className="overflow-auto flex flex-col w-full">
        {customers.length > 0 &&
          customers.map((customer: Customer) => {
            return (
              <div
                key={customer.id}
                className="border-t w-full border-neutral-400 flex gap-24 p-4"
              >
                <div className="flex gap-2 items-center w-1/6">
                  <p>User ID:</p>
                  {customer.userId}
                </div>
                <div className="flex gap-2 items-center w-1/4">
                  <p>Full Name:</p>
                  {customer.firstName} {customer.lastName}
                </div>

                <Button onClick={() => handleAssignEmployee(customer.userId)}>
                  Assign Employee
                </Button>
                <Button onClick={() => handleAssignAdmin(customer.userId)}>
                  Assign Admin
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GrantAccess;

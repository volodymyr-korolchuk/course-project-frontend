import { API_ROUTES } from "@/api";
import { useAuthStore } from "@/zustand/store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const RevokeAccess = () => {
  const { accessToken } = useAuthStore();
  const [staff, setStaff] = useState();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(API_ROUTES.users.staff, {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setStaff(data);
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
  return (
    <div>{staff && staff.map((item) => <div>{item.toString()}</div>)}</div>
  );
};

export default RevokeAccess;

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/zustand/store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyInvoices = () => {
  const [invoices, setInvoices] = useState();
  const [customerId, setCustomerId] = useState(1);
  const { user, accessToken } = useAuthStore();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/customers/my-invoices/${customerId}`,
          {
            mode: "cors",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();
        if (response.ok) {
          setInvoices(data.reverse());
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    };

    const getCustomerId = async (userId: number, accessToken: string) => {
      try {
        const response = await fetch(
          `http://localhost:5000/users/customer-id/${userId}`,
          {
            mode: "cors",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        return await response.json();
      } catch (error) {}
    };

    const id = getCustomerId(user?.id, accessToken);
    setCustomerId(id);
    fetchInvoices();
  }, []);

  const handlePay = async (id, sum) => {
    try {
      const response = await fetch(`http://localhost:5000/payments`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ invoiceId: id, totalAmount: sum }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        toast.success("Paid!");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-center w-full gap-2">
        <h2 className="text-6xl font-semibold">Your invoices:</h2>
        <div className="flex flex-col">
          {invoices?.length > 0 &&
            invoices.map((item) => {
              <div className="flex gap-3">
                <h2>{item.amountDue} UAH</h2>
                <h2>{item.insuranceAmount} UAH</h2>
                {item?.Payment?.id == null && (
                  <Button
                    onClick={() =>
                      handlePay(item.id, item.amountDue + item.insuranceAmount)
                    }
                  >
                    Pay
                  </Button>
                )}
              </div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default MyInvoices;

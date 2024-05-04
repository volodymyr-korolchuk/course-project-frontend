import { API_ROUTES } from "@/api";
import { useAuthStore } from "@/zustand/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(API_ROUTES.payments.all, {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPayments(data);
        }
      } catch (error) {}
    };

    fetchInvoices();
  }, []);

  return (
    <div className="p-4 flex w-full h-full">
      <div className="overflow-auto flex flex-col w-full">
        {payments &&
          payments.map((payment) => {
            return (
              <div className="border-t w-full border-neutral-400 flex gap-24 p-4">
                <div className="flex gap-2 items-center w-1/6">
                  <p>Invoice ID:</p>
                  {payment.Invoice.Leasing.id}
                </div>
                <div className="flex gap-2 items-center w-1/4">
                  <p>Customer:</p>
                  {payment.Invoice.Leasing.Customer.firstName}{" "}
                  {payment.Invoice.Leasing.Customer.lastName}
                </div>
                <div className="flex gap-2 items-center w-1/4">
                  <p>Total Amount:</p>
                  {payment.totalAmount} UAH
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Payments;

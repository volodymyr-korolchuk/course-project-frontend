import { API_ROUTES, ROUTES } from "@/api";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/zustand/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Invoices = () => {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(API_ROUTES.invoices.all, {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setInvoices(data);
        }
      } catch (error) {}
    };

    fetchInvoices();
  }, []);

  const handleOpen = (invoiceId: number) => {
    navigate(`${ROUTES.employee.invoices}/${invoiceId}`);
  };

  return (
    <div className="p-4 flex w-full h-full">
      <div className="overflow-auto flex flex-col w-full">
        {invoices ? (
          invoices.map((invoice) => {
            return (
              <div className="border-t w-full border-neutral-400 flex gap-12 p-4">
                <div className="flex gap-2 items-center w-1/3">
                  <p>Leasing ID:</p>
                  {invoice.leasingId}
                </div>
                <div className="flex gap-2 items-center w-1/2">
                  <p>Customer:</p>
                  {invoice.Leasing.Customer.firstName}{" "}
                  {invoice.Leasing.Customer.lastName}
                </div>
                <div className="flex gap-2 items-center w-1/3">
                  <p>Amount due:</p>
                  {invoice.amountDue} UAH
                </div>
                <div className="flex gap-2 items-center w-1/3">
                  <p>Insurance amount:</p>
                  {invoice.insuranceAmount} UAH
                </div>
                <div className="flex gap-2 items-center w-1/6">
                  {invoice?.Payment?.id ? (
                    <p className="bg-green-500 w-24 p-1 px-3 text-center  rounded-md text-sm">
                      Paid
                    </p>
                  ) : (
                    <p className="bg-white p-1 w-24 text-center px-3 rounded-md text-black">
                      Unpaid
                    </p>
                  )}
                </div>
                <Button onClick={() => handleOpen(invoice.id)}>Open</Button>
              </div>
            );
          })
        ) : (
          <div className="z-50">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Invoices;

import { API_ROUTES } from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/zustand/store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const InvoiceDetails = () => {
  const { id } = useParams();
  const { accessToken } = useAuthStore();
  const [invoice, setInvoice] = useState(null);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchInvoice = async () => {
      const response = await fetch(`${API_ROUTES.invoices.all}/${id}`, {
        mode: "cors",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setInvoice(data);
        setAmount(data.amountDue);
      }
    };

    fetchInvoice();
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch(`${API_ROUTES.invoices.all}/${id}`, {
        method: "PATCH",
        mode: "cors",
        body: JSON.stringify({ amountDue: +amount }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setInvoice(data);
      } else {
        setAmount(invoice.amountDue);
        throw new Error(data.message);
      }
      toast.success("Saved successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col text-3xl gap-3 bg-neutral-800 p-6 rounded-md">
          {invoice && (
            <>
              <div className="flex gap-2 items-center font-light text">
                <p className="font-semibold">Leasing ID:</p>
                {invoice.leasingId}
              </div>
              <div className="flex gap-2 items-center font-light text">
                <p className="font-semibold">Customer:</p>
                {invoice.Leasing.Customer.firstName}{" "}
                {invoice.Leasing.Customer.lastName}
              </div>
              <div className="flex gap-2 items-center font-light text">
                <p className="font-semibold">Amount due:</p>
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-neutral-800 w-24 text-3xl"
                />{" "}
                UAH
              </div>
              <div className="flex gap-2 items-center font-light">
                <p className="font-semibold">Insurance amount:</p>
                {invoice.insuranceAmount} UAH
              </div>
              <Button onClick={handleSave}>Save</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;

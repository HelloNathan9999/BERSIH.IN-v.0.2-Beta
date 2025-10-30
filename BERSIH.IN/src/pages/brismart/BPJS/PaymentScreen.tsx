import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Select, SelectItem } from "@/components/ui";

export default function PaymentScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bpjsNumber, tagihan } = location.state || {};
  const [method, setMethod] = useState("");

  const handleNext = () => {
    if (!method) return alert("Pilih metode pembayaran dulu");
    navigate("/brismart/bpjs/confirmation", {
      state: { bpjsNumber, tagihan, method },
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">Pilih Metode Pembayaran</h2>
      <Select onValueChange={setMethod}>
        <SelectItem value="saldo">Saldo GreenCoin</SelectItem>
        <SelectItem value="bank">Transfer Bank</SelectItem>
        <SelectItem value="qris">QRIS</SelectItem>
      </Select>
      <Button className="w-full" onClick={handleNext}>
        Konfirmasi Pembayaran
      </Button>
    </div>
  );
}

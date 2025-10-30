import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CheckoutScreen() {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-3">
      <h2 className="text-xl font-semibold">Konfirmasi Pembayaran</h2>

      <div className="bg-white p-4 rounded-2xl shadow">
        <p className="text-sm">Nomor Pelanggan: <strong>12345678</strong></p>
        <p className="text-sm">Jumlah Tagihan: <strong>Rp 150.000</strong></p>
      </div>

      <Button onClick={() => navigate("/brismart/lainnya/confirmation")} className="w-full">
        Bayar Sekarang
      </Button>
    </div>
  );
}

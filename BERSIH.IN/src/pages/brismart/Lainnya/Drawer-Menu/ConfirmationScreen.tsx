import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ConfirmationScreen() {
  const navigate = useNavigate();

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Pembayaran Berhasil 🎉</h2>
      <p className="text-gray-600 mb-6">Transaksi Anda telah selesai diproses.</p>

      <Button onClick={() => navigate("/brismart/lainnya")} className="w-full">
        Kembali ke Lainnya
      </Button>
    </div>
  );
}

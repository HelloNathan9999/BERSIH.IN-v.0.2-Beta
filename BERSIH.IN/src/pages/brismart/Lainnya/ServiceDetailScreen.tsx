import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ServiceDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Detail Layanan #{id}</h2>
      <p className="text-gray-600 mt-2">Masukkan detail tagihan atau informasi pelanggan.</p>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Masukkan Nomor Pelanggan"
          className="border rounded-lg p-2 w-full"
        />
      </div>

      <Button onClick={() => navigate(`/brismart/lainnya/checkout/${id}`)} className="mt-5 w-full">
        Lanjutkan Pembayaran
      </Button>
    </div>
  );
}

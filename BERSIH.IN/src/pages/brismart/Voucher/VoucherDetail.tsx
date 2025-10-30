import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const voucherData = {
  1: {
    title: "Diskon 10% Belanja",
    description: "Gunakan voucher ini untuk mendapatkan potongan 10% di BRISMART.",
    coin: 50,
    image: "/assets/voucher1.png",
  },
  2: {
    title: "Gratis Ongkir",
    description: "Gratis ongkir untuk semua transaksi belanja di BRISMART.",
    coin: 30,
    image: "/assets/voucher2.png",
  },
  3: {
    title: "Voucher PLN 20K",
    description: "Tukar 100 Green Coin untuk mendapatkan voucher PLN senilai Rp20.000.",
    coin: 100,
    image: "/assets/voucher3.png",
  },
};

export default function VoucherDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const voucher = voucherData[Number(id) as keyof typeof voucherData];

  if (!voucher) {
    return <p className="text-center mt-10">Voucher tidak ditemukan 😢</p>;
  }

  const handleRedeem = () => {
    alert(`🎉 Selamat! Kamu menukar ${voucher.coin} Green Coin untuk ${voucher.title}`);
    navigate("/brismart/voucher");
  };

  return (
    <div className="p-5">
      <img
        src={voucher.image}
        alt={voucher.title}
        className="w-full h-48 object-cover rounded-2xl mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{voucher.title}</h2>
      <p className="text-gray-600 mb-4">{voucher.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-green-600 font-semibold text-lg">
          🎋 {voucher.coin} Coin
        </span>
        <Button onClick={handleRedeem}>Tukar Sekarang</Button>
      </div>
    </div>
  );
}

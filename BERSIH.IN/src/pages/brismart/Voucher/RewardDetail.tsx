import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const rewardData = {
  1: {
    title: "Diskon 10% Belanja",
    date: "2025-10-22",
    status: "Claimed",
    description: "Gunakan kode ini untuk potongan 10% saat checkout di BRISMART.",
    code: "BRISMART10",
  },
  2: {
    title: "Gratis Ongkir",
    date: "2025-10-20",
    status: "Used",
    description: "Gratis ongkir untuk semua transaksi di BRISMART hingga Rp20.000.",
    code: "FREEONGKIR20",
  },
  3: {
    title: "Voucher PLN 20K",
    date: "2025-10-18",
    status: "Claimed",
    description: "Gunakan voucher ini untuk potongan Rp20.000 di transaksi PLN.",
    code: "PLN20KFREE",
  },
};

export default function RewardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const reward = rewardData[Number(id) as keyof typeof rewardData];

  if (!reward) {
    return <p className="text-center mt-10">Reward tidak ditemukan 😢</p>;
  }

  const handleUse = () => {
    alert(`🎉 Kode ${reward.code} sudah disalin!`);
    navigate("/brismart/voucher/reward");
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-1">{reward.title}</h2>
      <p className="text-sm text-gray-500 mb-4">Diklaim: {reward.date}</p>
      <p className="text-gray-600 mb-5">{reward.description}</p>

      <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-center mb-6">
        <p className="text-lg font-semibold text-green-700 mb-2">
          🎁 {reward.code}
        </p>
        <p className="text-sm text-gray-600">Kode ini dapat digunakan saat checkout</p>
      </div>

      <Button onClick={handleUse} className="w-full">
        Gunakan Voucher
      </Button>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const rewards = [
  {
    id: 1,
    title: "Diskon 10% Belanja",
    date: "2025-10-22",
    status: "Claimed",
  },
  {
    id: 2,
    title: "Gratis Ongkir",
    date: "2025-10-20",
    status: "Used",
  },
  {
    id: 3,
    title: "Voucher PLN 20K",
    date: "2025-10-18",
    status: "Claimed",
  },
];

export default function RewardHistory() {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">🎋 Riwayat Reward</h2>
      {rewards.map((r) => (
        <Card
          key={r.id}
          className="mb-3 p-4 hover:shadow-md transition-all cursor-pointer"
          onClick={() => navigate(`/brismart/voucher/reward/${r.id}`)}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-base">{r.title}</h3>
              <p className="text-sm text-gray-500">{r.date}</p>
            </div>
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                r.status === "Used"
                  ? "bg-gray-200 text-gray-600"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {r.status}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}

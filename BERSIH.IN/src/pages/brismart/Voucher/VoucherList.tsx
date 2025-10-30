import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const vouchers = [
  { id: 1, title: "Diskon 10% Belanja", coin: 50, image: "/assets/voucher1.png" },
  { id: 2, title: "Gratis Ongkir", coin: 30, image: "/assets/voucher2.png" },
  { id: 3, title: "Voucher PLN 20K", coin: 100, image: "/assets/voucher3.png" },
];

export default function VoucherList() {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">🎁 Voucher & Reward</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {vouchers.map((item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:shadow-md transition-all"
            onClick={() => navigate(`/brismart/voucher/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-t-xl"
            />
            <div className="p-3">
              <h3 className="font-semibold text-base">{item.title}</h3>
              <p className="text-sm text-gray-600">
                🎋 {item.coin} Green Coin
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

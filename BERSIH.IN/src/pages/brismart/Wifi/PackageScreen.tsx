import { useState } from "react";
import { Button } from "@/components/ui";

interface PackageScreenProps {
  account: string;
  onSelect: (billId: string) => void;
}

// Contoh tagihan WiFi bulanan
const bills = [
  { id: "b1", name: "Tagihan Oktober 2025", amount: 150000 },
  { id: "b2", name: "Tagihan November 2025", amount: 150000 },
];

export default function PackageScreen({ account, onSelect }: PackageScreenProps) {
  const [selected, setSelected] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tagihan WiFi untuk {account}</h1>
      <div className="flex flex-col gap-2">
        {bills.map((b) => (
          <Button
            key={b.id}
            variant={selected === b.id ? "default" : "outline"}
            onClick={() => setSelected(b.id)}
          >
            {b.name} - Rp{b.amount.toLocaleString()}
          </Button>
        ))}
      </div>
      <Button
        className="mt-4"
        onClick={() => selected && onSelect(selected)}
        disabled={!selected}
      >
        Lanjut ke Pembayaran
      </Button>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui";

interface PackageScreenProps {
  meterId: string;
  onSelect: (billId: string) => void;
}

// Contoh tagihan PLN
const bills = [
  { id: "pln1", name: "Tagihan Oktober 2025", amount: 200000 },
  { id: "pln2", name: "Tagihan November 2025", amount: 250000 },
];

export default function PackageScreen({ meterId, onSelect }: PackageScreenProps) {
  const [selected, setSelected] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tagihan PLN untuk {meterId}</h1>
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

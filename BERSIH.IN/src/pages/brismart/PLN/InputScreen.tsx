import { useState } from "react";
import { Button, Input } from "@/components/ui";

interface InputScreenProps {
  onNext: (meterId: string) => void;
}

export default function InputScreen({ onNext }: InputScreenProps) {
  const [meterId, setMeterId] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Masukkan ID Meter PLN</h1>
      <Input
        type="text"
        placeholder="ID Meter / No. Pelanggan"
        value={meterId}
        onChange={(e) => setMeterId(e.target.value)}
      />
      <Button
        className="mt-4"
        onClick={() => meterId && onNext(meterId)}
        disabled={!meterId}
      >
        Lanjut
      </Button>
    </div>
  );
}

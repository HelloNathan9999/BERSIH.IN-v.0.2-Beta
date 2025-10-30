import { useState } from "react";
import { Button, Input } from "@/components/ui";

interface InputScreenProps {
  onNext: (phone: string) => void;
}

export default function InputScreen({ onNext }: InputScreenProps) {
  const [phone, setPhone] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Masukkan Nomor Telepon</h1>
      <Input
        type="tel"
        placeholder="08xxxxxxx"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button
        className="mt-4"
        onClick={() => phone && onNext(phone)}
        disabled={!phone}
      >
        Lanjut
      </Button>
    </div>
  );
}

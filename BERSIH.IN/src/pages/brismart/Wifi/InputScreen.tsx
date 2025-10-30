import { useState } from "react";
import { Button, Input } from "@/components/ui";

interface InputScreenProps {
  onNext: (account: string) => void;
}

export default function InputScreen({ onNext }: InputScreenProps) {
  const [account, setAccount] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Masukkan ID Pelanggan WiFi</h1>
      <Input
        type="text"
        placeholder="ID Pelanggan"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
      <Button
        className="mt-4"
        onClick={() => account && onNext(account)}
        disabled={!account}
      >
        Lanjut
      </Button>
    </div>
  );
}

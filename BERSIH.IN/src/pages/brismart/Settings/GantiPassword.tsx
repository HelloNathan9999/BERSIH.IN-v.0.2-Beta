import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const GantiPassword: React.FC = () => {
  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");

  const gantiPassword = () => {
    if (passwordBaru !== konfirmasi) return alert("Password baru tidak sama!");
    // nanti connect ke Supabase
    alert("Password berhasil diganti!");
  };

  return (
    <div className="p-4 space-y-4">
      <Input type="password" placeholder="Password Lama" value={passwordLama} onChange={(e) => setPasswordLama(e.target.value)} />
      <Input type="password" placeholder="Password Baru" value={passwordBaru} onChange={(e) => setPasswordBaru(e.target.value)} />
      <Input type="password" placeholder="Konfirmasi Password Baru" value={konfirmasi} onChange={(e) => setKonfirmasi(e.target.value)} />
      <Button onClick={gantiPassword}>Ganti Password</Button>
    </div>
  );
};

export default GantiPassword;

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditProfile: React.FC = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");

  const simpanProfile = () => {
    // nanti connect ke Supabase
    alert("Profil tersimpan!");
  };

  return (
    <div className="p-4 space-y-4">
      <Input placeholder="Nama Lengkap" value={nama} onChange={(e) => setNama(e.target.value)} />
      <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Nomor Telepon" value={telepon} onChange={(e) => setTelepon(e.target.value)} />
      <Button onClick={simpanProfile}>Simpan</Button>
    </div>
  );
};

export default EditProfile;

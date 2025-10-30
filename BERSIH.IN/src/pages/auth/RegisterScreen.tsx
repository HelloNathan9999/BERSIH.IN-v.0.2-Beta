import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { supabase } from "@/lib/supabaseClient";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nik: "",
    nama_lengkap: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    setError("");

    const password_hash = await bcrypt.hash(form.password, 10);

    const { error: insertError } = await supabase.from("users").insert([
      {
        nik: form.nik,
        nama_lengkap: form.nama_lengkap,
        email: form.email,
        phone: form.phone,
        password_hash,
      },
    ]);

    if (insertError) setError(insertError.message);
    else navigate("/login");

    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Buat Akun Baru</h1>

      <Input placeholder="NIK" onChange={(e) => setForm({ ...form, nik: e.target.value })} />
      <Input placeholder="Nama Lengkap" className="mt-3" onChange={(e) => setForm({ ...form, nama_lengkap: e.target.value })} />
      <Input placeholder="Email" className="mt-3" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <Input placeholder="Nomor HP" className="mt-3" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <Input type="password" placeholder="Password" className="mt-3" onChange={(e) => setForm({ ...form, password: e.target.value })} />

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <Button onClick={handleRegister} disabled={loading} className="mt-6 w-full">
        {loading ? "Mendaftar..." : "Daftar Sekarang"}
      </Button>
    </div>
  );
}

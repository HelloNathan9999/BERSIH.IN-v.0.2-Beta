import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ambil user dari localStorage
    const storedUser = localStorage.getItem("bersihin_user_data");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const login = async (nik: string, password: string) => {
    const { data, error } = await supabase.from("users").select("*").eq("nik", nik).single();
    if (error || !data) throw new Error("NIK tidak ditemukan");
    // ...verifikasi password pakai bcrypt
    localStorage.setItem("bersihin_user_data", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("bersihin_user_data");
    setUser(null);
  };

  return { user, loading, login, logout };
};

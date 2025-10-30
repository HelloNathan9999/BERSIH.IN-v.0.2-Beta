import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("bersihin_user_data");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (nik: string, password: string) => {
    // ...cek data user di Supabase
    setUser({ nik, nama: "Nathan" });
    localStorage.setItem("bersihin_user_data", JSON.stringify({ nik }));
  };

  const logout = () => {
    localStorage.removeItem("bersihin_user_data");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

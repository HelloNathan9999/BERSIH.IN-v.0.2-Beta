import { useState } from "react";
/* Local lightweight Button and Input components to avoid missing module '../../components/ui' */
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { className?: string };
const Input = ({ className = "", ...props }: InputProps) => (
  <input {...props} className={"border rounded px-3 py-2 " + className} />
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string; children?: React.ReactNode };
const Button = ({ className = "", children, ...props }: ButtonProps) => (
  <button {...props} className={"bg-green-600 text-white px-4 py-2 rounded " + className}>
    {children}
  </button>
);
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabaseUrl =
  (process.env.REACT_APP_SUPABASE_URL as string) ||
  (typeof import.meta !== "undefined" ? (import.meta as any).env?.VITE_SUPABASE_URL : undefined) ||
  "";
const supabaseAnonKey =
  (process.env.REACT_APP_SUPABASE_ANON_KEY as string) ||
  (typeof import.meta !== "undefined" ? (import.meta as any).env?.VITE_SUPABASE_ANON_KEY : undefined) ||
  "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LoginScreen() {
  const navigate = useNavigate();
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("nik", nik)
      .single();

    if (!user) {
      setError("NIK tidak terdaftar.");
      setLoading(false);
      return;
    }

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      setError("Password salah.");
      setLoading(false);
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <div className="flex flex-col min-h-screen justify-center px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Masuk ke BERSIH.IN</h1>

      <Input placeholder="Masukkan NIK" value={nik} onChange={(e) => setNik(e.target.value)} />
      <Input
        type="password"
        placeholder="Masukkan Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-3"
      />

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <Button onClick={handleLogin} disabled={loading} className="mt-6 w-full">
        {loading ? "Memproses..." : "Masuk"}
      </Button>

      <p className="text-center text-sm mt-4 text-gray-500">
        Belum punya akun?{" "}
        <span className="text-green-600 font-medium cursor-pointer" onClick={() => navigate("/register")}>
          Daftar Sekarang
        </span>
      </p>
    </div>
  );
}

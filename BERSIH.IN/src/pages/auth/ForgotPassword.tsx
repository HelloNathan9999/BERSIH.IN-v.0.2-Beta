import React, { useState, ChangeEvent, ButtonHTMLAttributes } from "react";

/**
 * Local lightweight Input component to avoid depending on ../../components/ui
 */
type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function Input({ placeholder, value, onChange, className = "" }: InputProps) {
  return (
    <input
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded px-3 py-2 ${className}`}
    />
  );
}

/**
 * Local lightweight Button component to avoid depending on ../../components/ui
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
};

function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button {...props} className={`bg-blue-600 text-white rounded px-4 py-2 ${className}`}>
      {children}
    </button>
  );
}

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert(`Link reset password telah dikirim ke ${email}`);
  };

  return (
    <div className="flex flex-col min-h-screen justify-center px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Lupa Password</h1>

      <Input placeholder="Masukkan Email Terdaftar" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={handleSubmit} className="mt-6 w-full">
        Kirim Link Reset
      </Button>
    </div>
  );
}

import React from "react";
import { Home, ShoppingBag, User, Recycle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FooterNav: React.FC = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Beranda", path: "/home" },
    { icon: Recycle, label: "Setor", path: "/setor" },
    { icon: ShoppingBag, label: "BRISSMART", path: "/brissmart" },
    { icon: User, label: "Akun", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-inner border-t border-gray-200 dark:border-gray-700 flex justify-around py-2">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => navigate(item.path)}
          className="flex flex-col items-center text-xs text-gray-600 dark:text-gray-300"
        >
          <item.icon className="w-5 h-5 mb-1" />
          {item.label}
        </button>
      ))}
    </nav>
  );
};

import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-50 p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>

      <ul className="space-y-3">
        <li><a href="/home">🏠 Beranda</a></li>
        <li><a href="/profile">👤 Profil</a></li>
        <li><a href="/settings">⚙️ Pengaturan</a></li>
        <li><a href="/logout">🚪 Keluar</a></li>
      </ul>
    </motion.aside>
  );
};

import React from "react";

export default function DrawerMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Menu Transaksi</h3>
        <button onClick={onClose}>✖️</button>
      </div>
      <div className="mt-3 space-y-2">
        <button className="w-full p-3 bg-gray-100 rounded-xl">Riwayat</button>
        <button className="w-full p-3 bg-gray-100 rounded-xl">Bantuan</button>
      </div>
    </div>
  );
}

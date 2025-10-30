import { useEffect, useState } from "react";

export default function NotificationScreen() {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    setNotifications([
      { id: 1, message: "Transaksi penukaran sampah berhasil ✅", time: "5 menit lalu" },
      { id: 2, message: "Kamu mendapat 10 GreenCoin baru 💰", time: "1 jam lalu" },
      { id: 3, message: "Jangan lupa Check-In harian kamu!", time: "Kemarin" },
    ]);
  }, []);

  return (
    <div className="p-4 space-y-3">
      <h1 className="text-xl font-bold mb-2">Notifikasi</h1>
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="bg-white rounded-xl shadow p-3 text-sm text-gray-600"
        >
          <p>{notif.message}</p>
          <span className="text-xs text-gray-400">{notif.time}</span>
        </div>
      ))}
    </div>
  );
}

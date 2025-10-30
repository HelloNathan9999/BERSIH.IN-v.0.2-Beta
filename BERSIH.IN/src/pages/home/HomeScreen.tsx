import { useEffect, useState } from "react";
import { FeedCard } from "./FeedCard";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const [feeds, setFeeds] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulasi data feed
    setFeeds([
      {
        id: 1,
        author: "Bank Sampah Sejahtera",
        title: "Misi Baru: Daur Ulang Plastik!",
        description: "Kumpulkan 1kg plastik minggu ini dan dapatkan 50 GreenCoin.",
        image: "/assets/images/edukasi/feed1.png",
      },
      {
        id: 2,
        author: "BERSIH.IN",
        title: "Peringatan Hari Bumi 🌍",
        description: "Ayo tanam pohon dan tukarkan foto kegiatanmu dengan bonus coin!",
        image: "/assets/images/edukasi/feed2.png",
      },
    ]);
  }, []);

  return (
    <div className="p-4 space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Beranda</h1>
        <button
          type="button"
          className="border rounded px-2 py-1"
          onClick={() => navigate("/notifications")}
        >
          🔔
        </button>
      </header>

      {feeds.map((feed) => (
        <FeedCard key={feed.id} feed={feed} />
      ))}
    </div>
  );
}

import React, { useState } from "react";
import TopUserCard from "./TopUserCard";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  nama: string;
  level: string;
  poin: number;
  lokasi: string;
}

const dummyUsers: User[] = [
  { id: 1, nama: "Nathannael Wijaya", level: "Nasional", poin: 9500, lokasi: "Indonesia" },
  { id: 2, nama: "Rina Suryani", level: "Provinsi", poin: 8200, lokasi: "Jawa Barat" },
  { id: 3, nama: "Ahmad Rizal", level: "Kota", poin: 7600, lokasi: "Bandung" },
  { id: 4, nama: "Komunitas Hijau Ceria", level: "Komunitas", poin: 6800, lokasi: "Eco Green Bandung" },
];

const RankingList = () => {
  const [filter, setFilter] = useState<"Nasional" | "Provinsi" | "Kota" | "Komunitas">("Nasional");

  const filteredUsers = dummyUsers.filter((u) => u.level === filter);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Ranking Pengguna</h1>
      <div className="flex gap-2 flex-wrap">
        {(["Nasional", "Provinsi", "Kota", "Komunitas"] as const).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            onClick={() => setFilter(f)}
            className={filter === f ? "bg-green-600 text-white" : ""}
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, i) => (
            <TopUserCard key={user.id} user={user} rank={i + 1} />
          ))
        ) : (
          <p className="text-sm text-muted-foreground">Belum ada data untuk kategori ini.</p>
        )}
      </div>
    </div>
  );
};

export default RankingList;

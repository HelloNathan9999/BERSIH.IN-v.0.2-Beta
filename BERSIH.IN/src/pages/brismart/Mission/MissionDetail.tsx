import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MisiFlow from "./MisiFlow";

interface Misi {
  id: string;
  title: string;
  description: string;
  steps: string[];
}

const dummyMisi: Misi[] = [
  { id: "1", title: "Misi Bersih Sungai", description: "Membersihkan sungai di daerah X.", steps: ["Mulai", "Bersihkan", "Laporkan"] },
  { id: "2", title: "Misi Sampah Plastik", description: "Mengumpulkan 100kg sampah plastik.", steps: ["Mulai", "Kumpulkan", "Laporkan"] },
];

const MisiDetail: React.FC = () => {
  const { id } = useParams();
  const misi = dummyMisi.find((m) => m.id === id);

  if (!misi) return <p className="p-4">Misi tidak ditemukan.</p>;

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{misi.title}</CardTitle>
        </CardHeader>
        <CardContent>{misi.description}</CardContent>
      </Card>

      <MisiFlow />
    </div>
  );
};

export default MisiDetail;

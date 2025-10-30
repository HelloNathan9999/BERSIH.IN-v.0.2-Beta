import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Misi {
  id: string;
  title: string;
  description: string;
}

const dummyMisi: Misi[] = [
  { id: "1", title: "Misi Bersih Sungai", description: "Membersihkan sungai di daerah X." },
  { id: "2", title: "Misi Sampah Plastik", description: "Mengumpulkan 100kg sampah plastik." },
];

const MisiList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 grid gap-4">
      {dummyMisi.map((misi) => (
        <Card key={misi.id} className="cursor-pointer" onClick={() => navigate(`/misi/${misi.id}`)}>
          <CardHeader>
            <CardTitle>{misi.title}</CardTitle>
          </CardHeader>
          <CardContent>{misi.description}</CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MisiList;

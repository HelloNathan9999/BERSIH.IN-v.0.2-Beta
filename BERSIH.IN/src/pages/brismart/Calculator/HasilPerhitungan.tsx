import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  hasil: number;
}

const HasilPerhitungan: React.FC<Props> = ({ hasil }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hasil Perhitungan</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-bold">Rp {hasil.toLocaleString()}</p>
      </CardContent>
    </Card>
  );
};

export default HasilPerhitungan;

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutScreen: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Tentang BERSIH.IN</h2>

      <Card>
        <CardHeader>
          <CardTitle>Deskripsi Aplikasi</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            BERSIH.IN adalah aplikasi edukatif dan interaktif yang membantu pengguna dalam kegiatan daur ulang,
            pengelolaan sampah, serta meningkatkan kesadaran lingkungan melalui fitur edukasi, game, dan reward.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Versi</CardTitle>
        </CardHeader>
        <CardContent>
          <p>v0.2 – Development by RUBIX STUDIO</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutScreen;

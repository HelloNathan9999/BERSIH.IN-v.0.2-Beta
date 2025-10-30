import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const LiveStream = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
      <PlayCircle size={72} className="text-green-600 animate-pulse" />
      <h1 className="text-xl font-bold">Live Stream Komunitas</h1>
      <p className="text-sm text-muted-foreground">
        Saksikan edukasi dan diskusi langsung seputar lingkungan dan daur ulang.
      </p>
      <Button className="bg-green-600 text-white">Mulai Nonton</Button>
    </div>
  );
};

export default LiveStream;

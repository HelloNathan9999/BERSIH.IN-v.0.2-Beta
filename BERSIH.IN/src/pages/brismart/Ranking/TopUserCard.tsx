import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Medal } from "lucide-react";

interface Props {
  user: {
    nama: string;
    poin: number;
    level: string;
    lokasi: string;
  };
  rank: number;
}

const TopUserCard: React.FC<Props> = ({ user, rank }) => {
  const icon =
    rank === 1 ? <Crown className="text-yellow-500" /> :
    rank === 2 ? <Medal className="text-gray-400" /> :
    rank === 3 ? <Medal className="text-amber-600" /> : null;

  return (
    <Card className="flex items-center p-3 gap-3">
      <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full font-semibold">
        {rank}
      </div>
      <CardContent className="flex-1 p-0">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">{user.nama}</h2>
            <p className="text-xs text-muted-foreground">{user.lokasi}</p>
          </div>
          <div className="flex items-center gap-2">
            {icon}
            <p className="text-sm font-medium text-green-600">{user.poin} pts</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopUserCard;

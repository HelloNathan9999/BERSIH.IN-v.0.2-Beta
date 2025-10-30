import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const FilterPanel = () => {
  return (
    <div className="flex gap-2 mb-4">
      <Input placeholder="Cari Bank Sampah terdekat..." className="flex-1" />
      <Button className="bg-green-600 text-white">
        <Search size={18} />
      </Button>
    </div>
  );
};

export default FilterPanel;

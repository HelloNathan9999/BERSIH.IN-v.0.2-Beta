import React from "react";
import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold text-green-700 dark:text-green-400">
          BERSIH.IN
        </h1>
      </div>
      <Button variant="ghost" size="icon">
        <Bell className="w-5 h-5" />
      </Button>
    </header>
  );
};

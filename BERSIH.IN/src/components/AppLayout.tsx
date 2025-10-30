import React, { useState } from "react";
import { Header } from "./Header";
import { FooterNav } from "./FooterNav";
import { DrawerMenu } from "./DrawerMenu";

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
      <FooterNav />
      <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

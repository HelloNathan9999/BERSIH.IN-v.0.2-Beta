import React from "react";
import AppRoutes from "./routes"; // routing semua halaman
import { ThemeProvider } from "./theme/ThemeProvider";
import { AppProvider } from "./context/AppProvider"; // gabungan semua context
import AppLayout from "./components/layout/AppLayout"; // header + footer nav + drawer

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppLayout>
          <AppRoutes />  {/* Semua halaman akan render di sini */}
        </AppLayout>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;

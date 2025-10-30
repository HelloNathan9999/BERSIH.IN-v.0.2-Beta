import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export const useRealtime = (table: string, onChange: (payload: any) => void) => {
  useEffect(() => {
    const channel = supabase
      .channel(`public:${table}`)
      .on("postgres_changes", { event: "*", schema: "public", table }, onChange)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, onChange]);
};

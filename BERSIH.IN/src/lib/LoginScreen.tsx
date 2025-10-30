import { supabase } from "@/lib/supabaseClient";

const { data, error } = await supabase
  .from("users")
  .select("*")
  .eq("nik", nikInput);

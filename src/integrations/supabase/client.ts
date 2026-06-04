import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Dispara aviso no console em desenvolvimento para orientar a configuração das variáveis no .env
  console.warn(
    "Supabase: VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não estão definidas. Verifique o seu arquivo .env local."
  );
}

/**
 * Cliente centralizado do Supabase para o front-end.
 * Lê exclusivamente das variáveis de ambiente do Vite de forma segura.
 */
export const supabase = createClient(
  supabaseUrl || "https://placeholder-url.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
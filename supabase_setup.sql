-- 1. Primeiro, criamos a função auxiliar para atualizar o timestamp automaticamente
CREATE OR REPLACE FUNCTION public.trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Depois, criamos a tabela de tarefas tarefas_to_do
CREATE TABLE IF NOT EXISTS public.tarefas_to_do (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  detalhes TEXT,
  data_criacao TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  status TEXT DEFAULT 'pendente' NOT NULL,
  data_conclusao TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- 3. Ativamos o Row Level Security (RLS)
ALTER TABLE public.tarefas_to_do ENABLE ROW LEVEL SECURITY;

-- 4. Concedemos permissões para a API do Supabase acessar a tabela de forma segura
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.tarefas_to_do TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.tarefas_to_do TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.tarefas_to_do TO anon;

-- 5. Criamos a política de acesso irrestrito para desenvolvimento local
DROP POLICY IF EXISTS "Permitir acesso total público" ON public.tarefas_to_do;
CREATE POLICY "Permitir acesso total público" ON public.tarefas_to_do
  FOR ALL USING (true) WITH CHECK (true);

-- 6. Por fim, criamos o Trigger associado à função criada no passo 1
DROP TRIGGER IF EXISTS set_timestamp_tarefas ON public.tarefas_to_do;
CREATE TRIGGER set_timestamp_tarefas
BEFORE UPDATE ON public.tarefas_to_do
FOR EACH ROW EXECUTE FUNCTION public.trigger_set_timestamp();
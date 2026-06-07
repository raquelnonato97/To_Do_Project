export interface Todo {
  id: string;
  user_id: string;
  titulo: string;
  detalhes?: string;
  data_criacao: string;
  status: "pendente" | "concluida";
  data_conclusao?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateTodoInput {
  titulo: string;
  detalhes?: string;
  status: "pendente" | "concluida";
  user_id?: string;
}

export interface UpdateTodoInput {
  titulo?: string;
  detalhes?: string;
  status?: "pendente" | "concluida";
  data_conclusao?: string | null;
}
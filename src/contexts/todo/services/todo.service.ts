import { supabase } from "@/integrations/supabase/client";
import { Todo, CreateTodoInput, UpdateTodoInput } from "../todo.types";

/**
 * Busca todas as tarefas cadastradas na tabela tarefas_to_do.
 */
export async function getTodos(): Promise<Todo[]> {
  const { data, error } = await supabase
    .from("tarefas_to_do")
    .select("*")
    .order("data_criacao", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data || []) as Todo[];
}

/**
 * Cria uma nova tarefa na tabela tarefas_to_do.
 */
export async function createTodo(input: CreateTodoInput): Promise<Todo> {
  const { data, error } = await supabase
    .from("tarefas_to_do")
    .insert([{
      titulo: input.titulo,
      detalhes: input.detalhes,
      status: input.status,
      data_criacao: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Todo;
}

/**
 * Atualiza uma tarefa existente na tabela tarefas_to_do.
 */
export async function updateTodo(id: string, input: UpdateTodoInput): Promise<Todo> {
  const { data, error } = await supabase
    .from("tarefas_to_do")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as Todo;
}

/**
 * Deleta uma tarefa da tabela tarefas_to_do.
 */
export async function deleteTodo(id: string): Promise<void> {
  const { error } = await supabase
    .from("tarefas_to_do")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
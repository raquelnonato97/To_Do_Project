import React from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";
import { Loader2, ClipboardList } from "lucide-react";

/**
 * Lista de tarefas com tratamento de estados (vazio, loading e erro).
 */
export const TodoList = () => {
  const { todos, isLoading, isError, error } = useTodo();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3 text-slate-500">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        <span className="text-sm font-medium">Buscando tarefas do banco...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-800 text-sm">
        Ocorreu um erro ao carregar as tarefas: {error?.message}. Verifique a sua conexão com o Supabase e as chaves no arquivo <code className="bg-white/80 px-1 rounded font-mono text-xs">.env</code>.
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-3">
        <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <ClipboardList className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">Nenhuma tarefa encontrada</h4>
          <p className="text-sm text-slate-500 mt-0.5">Use o formulário ao lado para cadastrar sua primeira tarefa no banco.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3.5 max-h-[600px] overflow-y-auto pr-1">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
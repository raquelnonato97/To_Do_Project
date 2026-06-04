import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/todo.service";
import { CreateTodoInput, UpdateTodoInput } from "../todo.types";
import { showSuccess, showError } from "@/utils/toast";

/**
 * Hook centralizado para gerenciar dados de tarefas do To-Do.
 */
export function useTodo() {
  const queryClient = useQueryClient();

  const { data: todos = [], isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      showSuccess("Tarefa criada com sucesso!");
    },
    onError: (err: Error) => {
      showError(`Erro ao criar tarefa: ${err.message}`);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, input }: { id: string; input: UpdateTodoInput }) => updateTodo(id, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      showSuccess("Tarefa atualizada!");
    },
    onError: (err: Error) => {
      showError(`Erro ao atualizar tarefa: ${err.message}`);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      showSuccess("Tarefa removida com sucesso!");
    },
    onError: (err: Error) => {
      showError(`Erro ao deletar tarefa: ${err.message}`);
    }
  });

  return {
    todos,
    isLoading,
    isError,
    error,
    createTodo: createMutation.mutate,
    isCreating: createMutation.isPending,
    updateTodo: updateMutation.mutate,
    deleteTodo: deleteMutation.mutate
  };
}
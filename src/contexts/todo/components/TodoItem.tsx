import React from "react";
import { Todo } from "../todo.types";
import { useTodo } from "../hooks/useTodo";
import { CheckCircle2, Circle, Trash2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
}

/**
 * Item individual de tarefa com suporte a toggle de status e deleção.
 */
export const TodoItem = ({ todo }: TodoItemProps) => {
  const { updateTodo, deleteTodo } = useTodo();

  const handleToggle = () => {
    const isPending = todo.status === "pendente";
    updateTodo({
      id: todo.id,
      input: {
        status: isPending ? "concluida" : "pendente",
        data_conclusao: isPending ? new Date().toISOString() : null,
      },
    });
  };

  const formattedDate = new Date(todo.data_criacao).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className={cn(
      "p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white",
      todo.status === "concluida" 
        ? "border-emerald-100 bg-emerald-50/20" 
        : "border-slate-200/80 hover:border-slate-300 shadow-sm"
    )}>
      <div className="flex items-start gap-3">
        <button 
          onClick={handleToggle}
          className="mt-1 flex-shrink-0 transition-transform active:scale-95"
        >
          {todo.status === "concluida" ? (
            <CheckCircle2 className="h-6 w-6 text-emerald-600 fill-emerald-50" />
          ) : (
            <Circle className="h-6 w-6 text-slate-400 hover:text-indigo-600 transition-colors" />
          )}
        </button>
        <div>
          <h4 className={cn(
            "font-semibold text-slate-900 text-base leading-snug",
            todo.status === "concluida" && "line-through text-slate-500"
          )}>
            {todo.titulo}
          </h4>
          {todo.detalhes && (
            <p className={cn(
              "text-sm text-slate-600 mt-1 max-w-md",
              todo.status === "concluida" && "text-slate-400"
            )}>
              {todo.detalhes}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-2.5">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            <Badge className={cn(
              "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border",
              todo.status === "concluida" 
                ? "bg-emerald-50 border-emerald-200 text-emerald-700" 
                : "bg-amber-50 border-amber-200 text-amber-700"
            )}>
              {todo.status}
            </Badge>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        className="rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 self-end sm:self-center flex-shrink-0 h-9 w-9"
      >
        <Trash2 className="h-4.5 w-4.5" />
      </Button>
    </div>
  );
};
import React, { useState } from "react";
import { Todo } from "../todo.types";
import { useTodo } from "../hooks/useTodo";
import { CheckCircle2, Circle, Trash2, Calendar, Pencil, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
}

/**
 * Item individual de tarefa com suporte a toggle de status, deleção e edição inline de título e detalhes.
 */
export const TodoItem = ({ todo }: TodoItemProps) => {
  const { updateTodo, deleteTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitulo, setEditTitulo] = useState(todo.titulo);
  const [editDetalhes, setEditDetalhes] = useState(todo.detalhes || "");

  const handleToggle = () => {
    if (isEditing) return; // Desativa toggle enquanto edita
    const isPending = todo.status === "pendente";
    updateTodo({
      id: todo.id,
      input: {
        status: isPending ? "concluida" : "pendente",
        data_conclusao: isPending ? new Date().toISOString() : null,
      },
    });
  };

  const handleSave = () => {
    if (!editTitulo.trim()) return;
    updateTodo({
      id: todo.id,
      input: {
        titulo: editTitulo,
        detalhes: editDetalhes,
      },
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitulo(todo.titulo);
    setEditDetalhes(todo.detalhes || "");
    setIsEditing(false);
  };

  const formattedDate = new Date(todo.data_criacao).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className={cn(
      "p-4 rounded-2xl border transition-all flex flex-col gap-4 bg-white",
      todo.status === "concluida" 
        ? "border-emerald-100 bg-emerald-50/20" 
        : "border-slate-200/80 hover:border-slate-300 shadow-sm"
    )}>
      {isEditing ? (
        <div className="space-y-3 w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Editando Tarefa</span>
            <div className="flex gap-1.5">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCancel}
                className="h-8 w-8 p-0 rounded-full text-slate-500 hover:text-red-600 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                className="h-8 px-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center gap-1 text-xs"
              >
                <Check className="h-3.5 w-3.5" />
                Salvar
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Input
              value={editTitulo}
              onChange={(e) => setEditTitulo(e.target.value)}
              placeholder="Título da tarefa"
              className="rounded-xl border-slate-200 text-sm font-semibold"
            />
            <Textarea
              value={editDetalhes}
              onChange={(e) => setEditDetalhes(e.target.value)}
              placeholder="Detalhes adicionais..."
              className="rounded-xl border-slate-200 text-xs min-h-[60px] resize-none"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
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
                  "text-sm text-slate-600 mt-1 max-w-md whitespace-pre-line",
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

          <div className="flex items-center gap-1 self-end sm:self-center flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(true)}
              className="rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 h-9 w-9"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTodo(todo.id)}
              className="rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 h-9 w-9"
            >
              <Trash2 className="h-4.5 w-4.5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
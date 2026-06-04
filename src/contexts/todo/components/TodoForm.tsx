import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTodo } from "../hooks/useTodo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PlusCircle } from "lucide-react";

const todoSchema = z.object({
  titulo: z.string().min(3, "O título deve ter no mínimo 3 caracteres."),
  detalhes: z.string().optional(),
});

type TodoFormData = z.infer<typeof todoSchema>;

/**
 * Formulário simples e robusto para criar novas tarefas To-Do.
 */
export const TodoForm = () => {
  const { createTodo, isCreating } = useTodo();
  
  const form = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      titulo: "",
      detalhes: "",
    },
  });

  const onSubmit = (data: TodoFormData) => {
    createTodo({
      titulo: data.titulo,
      detalhes: data.detalhes,
      status: "pendente",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg text-slate-900 mb-2">Adicionar Nova Tarefa</h3>
        
        <FormField
          control={form.control}
          name="titulo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold">Título</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Estudar Banco de Dados" className="rounded-xl border-slate-200" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="detalhes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-semibold">Detalhes / Descrição</FormLabel>
              <FormControl>
                <Textarea placeholder="Descreva os passos para concluir esta tarefa" className="rounded-xl border-slate-200 resize-none min-h-[80px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={isCreating}
          className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md shadow-indigo-100 flex items-center justify-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          {isCreating ? "Adicionando..." : "Criar Tarefa"}
        </Button>
      </form>
    </Form>
  );
};
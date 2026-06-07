"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  ClipboardList,
  LogOut,
  User as UserIcon,
  Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TodoForm } from "@/contexts/todo/components/TodoForm";
import { TodoList } from "@/contexts/todo/components/TodoList";
import { useAuth } from "@/contexts/auth/AuthContext";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"tasks" | "docs">("tasks");
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-200">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Portal<span className="text-indigo-600">Base</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveTab("tasks")}
              className={`text-sm font-medium transition-colors ${activeTab === "tasks" ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"}`}
            >
              Minhas Tarefas
            </button>
            <button 
              onClick={() => setActiveTab("docs")}
              className={`text-sm font-medium transition-colors ${activeTab === "docs" ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"}`}
            >
              Documentos
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            {user && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                <UserIcon className="h-4 w-4 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700 max-w-[150px] truncate">
                  {user.email}
                </span>
              </div>
            )}
            <Button 
              onClick={signOut}
              variant="ghost"
              size="sm"
              className="rounded-full text-slate-500 hover:text-red-600 hover:bg-red-50 flex items-center gap-1.5"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sair</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Gerenciador de Tarefas <span className="text-indigo-600">Integrado</span>
          </h1>
          <p className="text-slate-500 mt-3 text-base">
            Organize e gerencie seus afazeres diários de forma rápida e intuitiva.
          </p>
        </div>

        {/* Tab Content */}
        {activeTab === "tasks" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
            <div className="lg:col-span-1">
              <TodoForm />
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                  <ClipboardList className="text-indigo-600 h-5 w-5" />
                  Lista de Atividades
                </h3>
                <Badge variant="outline" className="text-xs font-semibold rounded-full border-slate-200 bg-white">
                  Banco de Dados Ativo
                </Badge>
              </div>
              <TodoList />
            </div>
          </div>
        )}

        {activeTab === "docs" && (
          <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center mb-16">
            <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 mx-auto mb-5 shadow-sm">
              <Github className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Repositório do Projeto</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
              Acesse o código-fonte, acompanhe as atualizações e colabore diretamente com o desenvolvimento através do GitHub oficial do projeto.
            </p>
            <div className="mt-6 flex justify-center">
              <a 
                href="https://github.com/raquelnonato97/To_Do_Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-850 text-white font-medium shadow-md transition-all active:scale-98"
              >
                <Github className="h-5 w-5" />
                Ver no GitHub
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} PortalBase. Todos os arquivos de arquitetura foram carregados com sucesso.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
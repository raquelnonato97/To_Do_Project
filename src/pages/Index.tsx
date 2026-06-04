"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Layers, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  FileText,
  Smartphone,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from "@/utils/toast";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "docs">("overview");

  const handleNotify = () => {
    showSuccess("Pronto para receber as novas instruções de arquitetura!");
  };

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
              onClick={() => setActiveTab("overview")}
              className={`text-sm font-medium transition-colors ${activeTab === "overview" ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"}`}
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActiveTab("features")}
              className={`text-sm font-medium transition-colors ${activeTab === "features" ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"}`}
            >
              Diretrizes
            </button>
            <button 
              onClick={() => setActiveTab("docs")}
              className={`text-sm font-medium transition-colors ${activeTab === "docs" ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"}`}
            >
              Documentos
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleNotify}
              className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-5 shadow-lg shadow-indigo-100 transition-all hover:shadow-indigo-200"
            >
              Iniciar Arquitetura
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200 px-3 py-1 rounded-full text-xs font-semibold mb-4">
            🚀 Estrutura Pronta & Configurada
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Seu novo projeto web está <span className="text-indigo-600">pronto para evoluir</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Copiamos com sucesso as regras personalizadas de <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-sm">AI_RULES.md</code>, 
            além das especificações de <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-sm">Frontend.md</code> e <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-sm">Backend.md</code>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => setActiveTab("features")}
              variant="outline" 
              className="rounded-full border-slate-200 hover:bg-slate-100 text-slate-700 px-6"
            >
              Ver Diretrizes
            </Button>
            <Button 
              onClick={handleNotify}
              className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 shadow-lg shadow-emerald-100"
            >
              Enviar Sinal de Pronto <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-slate-200/80 shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden bg-white">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                  <Palette className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Design System</CardTitle>
                <CardDescription className="text-slate-500">Estética moderna e colorida</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Seguindo as diretrizes visuais com formas arredondadas, alto contraste, cores vibrantes e layouts totalmente responsivos para dispositivos móveis e desktop.
              </CardContent>
            </Card>

            <Card className="border-slate-200/80 shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden bg-white">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <Cpu className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Arquitetura Limpa</CardTitle>
                <CardDescription className="text-slate-500">Pronto para escalabilidade</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Estrutura de pastas organizada com <code className="bg-slate-100 px-1 rounded text-emerald-700">src/pages</code> e <code className="bg-slate-100 px-1 rounded text-emerald-700">src/components</code>, facilitando a manutenção e criação de novos fluxos.
              </CardContent>
            </Card>

            <Card className="border-slate-200/80 shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden bg-white">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                  <Layers className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">Componentes Ricos</CardTitle>
                <CardDescription className="text-slate-500">Biblioteca Shadcn/ui ativa</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Acesso completo a componentes interativos e acessíveis, prontos para serem customizados e integrados com as regras de negócio que você definir.
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "features" && (
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-indigo-600 h-6 w-6" /> Diretrizes de Desenvolvimento Ativas
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Design Mobile-First</h3>
                  <p className="text-slate-600 text-sm">Todas as interfaces são projetadas primeiro para telas menores e depois aprimoradas para telas grandes.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Formas Arredondadas & Cores Vivas</h3>
                  <p className="text-slate-600 text-sm">Preferência por cantos arredondados e paletas de cores confiantes, evitando fundos com gradientes complexos ou excesso de tons escuros neutros.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Componentes Focados</h3>
                  <p className="text-slate-600 text-sm">Criação de arquivos pequenos e focados (menos de 100 linhas sempre que possível) para manter o código limpo e legível.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "docs" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="border border-slate-200 bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="text-indigo-600 h-5 w-5" />
                  <span className="font-bold text-slate-900">AI_RULES.md</span>
                </div>
                <p className="text-slate-600 text-xs mb-4">Contém as regras de desenvolvimento, padrões de código e diretrizes estéticas do projeto.</p>
              </div>
              <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-50 border-indigo-100 self-start rounded-full">Atualizado</Badge>
            </div>

            <div className="border border-slate-200 bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="text-emerald-600 h-5 w-5" />
                  <span className="font-bold text-slate-900">Frontend.md</span>
                </div>
                <p className="text-slate-600 text-xs mb-4">Especificações de arquitetura do cliente, componentes e fluxos de tela.</p>
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-emerald-100 self-start rounded-full">Adicionado</Badge>
            </div>

            <div className="border border-slate-200 bg-white rounded-2xl p-5 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="text-amber-600 h-5 w-5" />
                  <span className="font-bold text-slate-900">Backend.md</span>
                </div>
                <p className="text-slate-600 text-xs mb-4">Especificações de integrações, APIs, banco de dados e lógica de servidor.</p>
              </div>
              <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50 border-amber-100 self-start rounded-full">Adicionado</Badge>
            </div>
          </div>
        )}

        {/* Call to Action / Next Steps */}
        <div className="bg-indigo-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl shadow-indigo-100">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-800 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-indigo-700 rounded-full opacity-30 blur-2xl"></div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">Pronto para o próximo passo?</h2>
          <p className="text-indigo-200 max-w-xl mx-auto mb-8 text-sm sm:text-base relative z-10">
            Estou aguardando suas orientações sobre a arquitetura deste app. Diga-me quais telas, fluxos ou integrações devemos construir a seguir!
          </p>
          <div className="flex justify-center gap-4 relative z-10">
            <div className="flex items-center gap-2 bg-indigo-800/80 border border-indigo-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              <Smartphone className="h-4 w-4 text-indigo-300" /> Mobile-First Ativo
            </div>
            <div className="flex items-center gap-2 bg-indigo-800/80 border border-indigo-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              <Code2 className="h-4 w-4 text-indigo-300" /> TypeScript & React
            </div>
          </div>
        </div>
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
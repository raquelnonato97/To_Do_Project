# Contexto: Tarefas (To-Do)

Este contexto gerencia todo o fluxo de tarefas (To-Do) do aplicativo.

## Estrutura de Banco de Dados

### Tabela: `public.tarefas_to_do`
- `id` (UUID, PK) - Identificador único
- `titulo` (TEXT) - Título da tarefa
- `detalhes` (TEXT) - Detalhamento opcional
- `data_criacao` (TIMESTAMP) - Data de início da tarefa
- `status` (TEXT) - Estado da tarefa (`pendente` ou `concluida`)
- `data_conclusao` (TIMESTAMP) - Data em que a tarefa foi marcada como concluída

## Estrutura de Código
- `todo.types.ts`: Tipagem forte TypeScript para as entidades.
- `services/todo.service.ts`: Comunicação direta com o cliente Supabase.
- `hooks/useTodo.ts`: Queries e Mutations do TanStack Query para gerenciamento reativo do estado.
- `components/`: Componentes modulares, focados e de alta responsabilidade.
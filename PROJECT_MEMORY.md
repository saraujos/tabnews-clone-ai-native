# Memória do projeto

## Objetivo e continuidade

Clone do TabNews desenvolvido com abordagem AI-Native durante o curso.dev/ia, de Filipe Deschamps. A página inicial é uma página em construção com temática de Fórmula 1, preservando o título original e o link do repositório. O escopo da primeira funcionalidade de produto ainda precisa ser definido.

A apresentação e as orientações de execução estão em `README.md`. Dependências, scripts e resoluções devem ser consultados em `package.json` e `package-lock.json`, sem reproduzi-los aqui.

## Base arquitetural e decisões

- **Base existente:** Next.js com App Router, React e JavaScript. A motivação original da escolha não está documentada. Preservar a convenção enquanto não houver necessidade concreta de mudança.
- **Idioma do produto:** português brasileiro, preservando o contexto do curso e o idioma já adotado. Não há justificativa adicional documentada.
- **Contexto persistente em Markdown na raiz:** facilita continuidade e revisão por Git sem dependências adicionais. Os arquivos precisam estar disponíveis entre sessões; compartilhá-los por Git depende de versionamento.
- **Separação de responsabilidades aprovada:** `AGENTS.md` define o comportamento dos agentes; esta memória guarda apenas contexto duradouro. O histórico detalhado pertence ao Git e às revisões.
- **Política de manutenção aprovada:** avaliar a memória ao concluir tarefas, atualizando-a apenas quando houver informação duradoura. Essa política substitui a exigência inicial de registrar cada tarefa e evita transformar a memória em diário de execução.

## Limitação persistente

- O som de passagem de carro é uma gravação real hospedada no próprio projeto, publicada por Heigh-hoo no Freesound sob CC0 1.0. A origem e a licença estão documentadas em `public/audio/README.md`. A reprodução automática depende da política do navegador; quando bloqueada, a página oferece um botão para iniciar o som por interação do visitante.

A continuidade depende de o agente acessar e seguir as instruções e reconciliar a memória com a implementação. Não existe garantia de carregamento automático em todas as ferramentas nem monitoramento de edições manuais.

## Pendências e propostas

- **Pendência confirmada:** definir o escopo e a prioridade da primeira funcionalidade conforme a próxima tarefa ou etapa do curso. A ausência de funcionalidades futuras não representa, por si só, um bug.
- **Sugestão não aprovada:** introduzir testes e verificações automatizadas conforme surgirem comportamentos que precisem de cobertura. Não constitui autorização para adicionar infraestrutura nesta tarefa.
- Não há hipóteses técnicas ou impedimentos persistentes adicionais registrados.

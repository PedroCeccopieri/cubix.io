# Cube Mastery Hub (84)

Crie um site moderno e responsivo para uma plataforma de aprendizado de cubo mágico chamada [NOME DO SITE].

O objetivo do site é ensinar pessoas a resolver diferentes tipos de puzzles, organizando o conteúdo em puzzles → métodos → casos → algoritmos (fórmulas).

Estrutura principal

A página inicial deve apresentar a plataforma de forma simples e visual, com uma seção de destaque explicando que o usuário pode aprender a resolver diferentes puzzles de cubo mágico.

Na página inicial, mostrar uma seção "Escolha seu puzzle" com cards para os diferentes puzzles disponíveis:

2x2

3x3

4x4

5x5

6x6

7x7

Pyraminx

Skewb

Megaminx

Cada puzzle deve ter:

Uma imagem/ilustração do puzzle

Nome

Breve descrição

Quantidade de métodos disponíveis

Página de um puzzle

Ao clicar em um puzzle, o usuário deve ser levado para uma página específica daquele puzzle.

Exemplo:

Cubo 3x3

Mostrar informações sobre o puzzle e uma lista de métodos disponíveis para aprender a resolvê-lo.

Exemplos de métodos:

Método de Camadas (LBL)

CFOP

Roux

ZZ

Cada método deve ser apresentado em um card contendo:

Nome do método

Breve descrição

Nível de dificuldade

Progresso do usuário

Botão "Começar a aprender"

Página do método

Ao entrar em um método, mostrar a estrutura completa do curso.

Exemplo:

CFOP

Progresso: 35%

Etapas

Cross

F2L

OLL

PLL

Cada etapa deve conter seus respectivos conteúdos/casos.

Por exemplo:

OLL

OLL 1

OLL 2

OLL 3

OLL 4

etc.

PLL

PLL Aa

PLL Ab

PLL E

PLL F

PLL Ga

etc.

Cada caso deve possuir:

Nome do caso

Ilustração/animação do cubo mostrando a posição inicial

Algoritmo/fórmula

Notação do algoritmo

Botão para copiar o algoritmo

Explicação de como executar

Opção para marcar o caso como aprendido

Progresso individual daquele caso

Página de um caso

Criar uma página dedicada para cada caso.

Exemplo:

PLL T

Mostrar uma representação grande do cubo com o caso configurado.

Abaixo:

Algoritmo

R U R' U' R' F R2 U' R' U' R U R' F'

Adicionar um botão "Copiar algoritmo".

Também mostrar:

Notação utilizada

Dicas para memorizar

Dicas de execução

Vídeo/tutorial (quando disponível)

Botão "Marcar como aprendido"

Botões para navegar para o caso anterior e próximo caso

Sistema de progresso

O usuário deve conseguir acompanhar seu progresso.

Mostrar:

Porcentagem de conclusão de cada método

Casos aprendidos / total de casos

Progresso por etapa

Progresso por puzzle

Exemplo:

CFOP
████████░░ 80%

OLL
██████░░░░ 60%

PLL
██████████ 100%

O progresso deve ser salvo para que o usuário possa retornar posteriormente.

Navegação

Criar uma barra de navegação contendo:

Início

Puzzles

Meu progresso

Métodos

Sobre

No desktop, utilizar uma sidebar ou navbar moderna.

No celular, utilizar uma navegação adaptada para mobile.

Design

O visual deve ser moderno, limpo e inspirado no universo do cubo mágico, mas sem parecer infantil.

Utilizar:

Fundo claro ou escuro com opção de alternância entre os dois

Cards modernos

Bordas arredondadas

Animações suaves

Tipografia moderna

Bastante espaço entre os elementos

Ícones simples

Cores inspiradas nas faces de um cubo mágico: branco, amarelo, vermelho, laranja, azul e verde

Os cubos devem aparecer como elementos visuais importantes da interface.

Página inicial

A home deve ter uma seção hero com algo semelhante a:

"Aprenda a resolver qualquer puzzle."

Subtítulo:

"Aprenda métodos, pratique casos e domine os algoritmos dos seus puzzles favoritos."

Botão:

"Começar a aprender"

Abaixo do hero, mostrar os puzzles disponíveis e uma seção explicando como a plataforma funciona:

1. Escolha seu puzzle
Escolha entre 2x2, 3x3, 4x4 e outros puzzles.

2. Escolha um método
Aprenda utilizando o método que melhor se adapta ao seu objetivo.

3. Aprenda os casos
Estude cada caso individualmente com algoritmos e explicações.

4. Pratique e acompanhe seu progresso
Marque os casos aprendidos e acompanhe sua evolução.

Dados

Estruture o projeto de forma que os puzzles, métodos, etapas, casos e algoritmos sejam dados separados da interface.

A estrutura conceitual deve ser:

Puzzle
→ Métodos
→ Etapas
→ Casos
→ Algoritmos

Isso deve permitir adicionar novos puzzles, métodos e casos posteriormente sem precisar alterar a estrutura principal do site.

Experiência do usuário

A plataforma deve parecer um verdadeiro curso online de cubo mágico, e não apenas uma página com uma lista de algoritmos.

Priorize:

Facilidade de navegação

Visualização clara dos casos

Memorização dos algoritmos

Acompanhamento de progresso

Interface rápida e responsiva

Boa experiência tanto no computador quanto no celular

Crie inicialmente alguns dados de exemplo para o 3x3, incluindo CFOP, OLL e PLL, para demonstrar como a plataforma funcionará. Os outros puzzles podem aparecer como opções disponíveis, mas com conteúdo marcado como "Em breve".

O resultado deve ter aparência de um produto real pronto para ser utilizado, com uma interface profissional e consistente em todas as páginas.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4d8c7564-660b-4937-8216-98095bb3fd1c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

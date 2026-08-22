import type { CaseItem, Stage } from "./types";

const gray = "xxxxxxxxx";

function ollDiagram(top: string, up: string, right: string, down: string, left: string) {
  return { top, sides: { up, right, down, left } };
}

/** OLL — seleção representativa dos 57 casos */
const ollCases: CaseItem[] = [
  {
    id: "oll-21",
    name: "OLL 21 — H / Cruz dupla",
    group: "Cruz amarela formada",
    algorithm: "R U2 R' U' R U R' U' R U' R'",
    diagram: ollDiagram("xyxyyyxyx", "yxy", "xxx", "yxy", "xxx"),
    execution:
      "Comece com a cruz amarela pronta e os quatro cantos virados. Segure com dois cantos amarelos apontando para os lados esquerdo e direito.",
    memoTip: "É o 'Sune duplo': faça um Sune e desfaça-o com o movimento espelhado.",
  },
  {
    id: "oll-22",
    name: "OLL 22 — Pi",
    group: "Cruz amarela formada",
    algorithm: "R U2 R2 U' R2 U' R2 U2 R",
    diagram: ollDiagram("xyxyyyxyx", "xxx", "yxy", "xxx", "yxy"),
    execution: "Segure a peça com as duas headlights amarelas voltadas para a frente.",
    memoTip: "Sequência simétrica: sobe, três pares de R2, e volta.",
  },
  {
    id: "oll-23",
    name: "OLL 23 — Headlights (U)",
    group: "Cruz amarela formada",
    algorithm: "R2 D R' U2 R D' R' U2 R'",
    diagram: ollDiagram("xyxyyyyyy", "xxx", "xxx", "xxx", "yxy"),
    execution: "Os dois cantos amarelos já resolvidos ficam para trás.",
    memoTip: "Pense em 'abrir a gaveta' com R2 D e fechar depois.",
  },
  {
    id: "oll-24",
    name: "OLL 24 — Chameleon",
    group: "Cruz amarela formada",
    algorithm: "r U R' U' r' F R F'",
    diagram: ollDiagram("xyyyyyxyx", "xxy", "xxx", "yxx", "xxx"),
    execution: "O canto resolvido fica na frente-esquerda.",
    memoTip: "É o sexy move com wide r, terminando com o gatilho F R F'.",
  },
  {
    id: "oll-25",
    name: "OLL 25 — Bowtie",
    group: "Cruz amarela formada",
    algorithm: "F' r U R' U' r' F R",
    diagram: ollDiagram("yyxyyyxyx", "xxx", "xxy", "yxx", "xxx"),
    execution: "Gravata borboleta: um canto amarelo em cima à esquerda e outro embaixo à direita.",
    memoTip: "Espelho do Chameleon começando com F'.",
  },
  {
    id: "oll-26",
    name: "OLL 26 — Antisune",
    group: "Cruz amarela formada",
    algorithm: "R U2 R' U' R U' R'",
    diagram: ollDiagram("xyxyyyyyx", "xxx", "xxx", "xxy", "yxx"),
    execution: "O único canto amarelo virado para cima fica na frente-esquerda.",
    memoTip: "É o Sune ao contrário — o mais fácil de memorizar depois do Sune.",
  },
  {
    id: "oll-27",
    name: "OLL 27 — Sune",
    group: "Cruz amarela formada",
    algorithm: "R U R' U R U2 R'",
    diagram: ollDiagram("yyxyyyxyx", "xxx", "xxx", "xxy", "xxx"),
    execution:
      "Segure o cubo com o único canto amarelo virado para cima na posição traseira-esquerda.",
    memoTip: "O algoritmo mais famoso do CFOP. Ritmo: R U R' — R U2 R'.",
    videoUrl: "https://www.youtube.com/results?search_query=sune+oll",
  },
  {
    id: "oll-1",
    name: "OLL 1 — Runway",
    group: "Ponto",
    algorithm: "R U2 R2 F R F' U2 R' F R F'",
    diagram: ollDiagram("xxxxyxxxx", "yxy", "xxx", "yxy", "xxx"),
    execution: "Nenhuma aresta amarela orientada: apenas o centro amarelo aparece.",
    memoTip: "Dois gatilhos F R F' separados por U2.",
  },
  {
    id: "oll-2",
    name: "OLL 2 — Zamboni",
    group: "Ponto",
    algorithm: "F R U R' U' F' f R U R' U' f'",
    diagram: ollDiagram("xxxxyxxxx", "xxx", "yxy", "xxx", "yxy"),
    execution: "Combinação do OLL de linha com o de L usando wide moves.",
    memoTip: "É literalmente 'F-sexy-F'' seguido de 'f-sexy-f''.",
  },
  {
    id: "oll-44",
    name: "OLL 44 — Arco / P",
    group: "Formato de L e linha",
    algorithm: "f R U R' U' f'",
    diagram: ollDiagram("xxxyyyxyx", "xxx", "xxx", "yxy", "xxx"),
    execution: "A linha amarela fica na horizontal, na parte de trás.",
    memoTip: "Sexy move envelopado por f ... f'.",
  },
  {
    id: "oll-45",
    name: "OLL 45 — T",
    group: "Formato de L e linha",
    algorithm: "F R U R' U' F'",
    diagram: ollDiagram("xyxxyyxyx", "xxx", "xxx", "xxx", "yyx"),
    execution: "O formato de T amarelo aponta para trás.",
    memoTip: "Sexy move envelopado por F ... F'.",
  },
  {
    id: "oll-57",
    name: "OLL 57 — Cantos orientados",
    group: "Cruz amarela formada",
    algorithm: "R U R' U' M' U R U' r'",
    diagram: ollDiagram("xyxyyyxyx", "xxx", "xxx", "xxx", "xxx"),
    execution: "Todos os cantos já estão orientados, só faltam duas arestas opostas.",
    memoTip: "Sexy move + M' U R U' r' — muito fluido com dedos.",
  },
];

/** PLL — os 21 casos */
function pllDiagram(
  up: string,
  right: string,
  down: string,
  left: string,
  arrows?: NonNullable<CubeDiagram["arrows"]>,
): CubeDiagram {
  const base: CubeDiagram = { top: "yyyyyyyyy", sides: { up, right, down, left } };
  return arrows ? { ...base, arrows } : base;
}

const pllCases: CaseItem[] = [
  {
    id: "pll-aa",
    name: "PLL Aa",
    group: "Permutação de cantos",
    algorithm: "x R' U R' D2 R U' R' D2 R2",
    diagram: pllDiagram("bgb", "roo", "ggr", "bro", [
      { from: 0, to: 2 },
      { from: 2, to: 8 },
      { from: 8, to: 0 },
    ]),
    execution: "Três cantos giram no sentido horário. As headlights ficam à esquerda.",
    memoTip: "Aa e Ab são espelhos: mude só o sentido do primeiro U.",
  },
  {
    id: "pll-ab",
    name: "PLL Ab",
    group: "Permutação de cantos",
    algorithm: "x R2 D2 R U R' D2 R U' R",
    diagram: pllDiagram("bgb", "rro", "grg", "boo", [
      { from: 2, to: 0 },
      { from: 0, to: 6 },
      { from: 6, to: 2 },
    ]),
    execution: "Três cantos giram no sentido anti-horário.",
    memoTip: "Comece com x R2 D2 e siga o mesmo ritmo do Aa.",
  },
  {
    id: "pll-e",
    name: "PLL E",
    group: "Permutação de cantos",
    algorithm: "x' R U' R' D R U R' D' R U R' D R U' R' D'",
    diagram: pllDiagram("brb", "rgr", "bob", "gog", [
      { from: 0, to: 6, both: true },
      { from: 2, to: 8, both: true },
    ]),
    execution: "Dois pares de cantos adjacentes trocam entre si.",
    memoTip: "Quatro repetições do mesmo gatilho alternando U/U' e D/D'.",
  },
  {
    id: "pll-f",
    name: "PLL F",
    group: "Cantos e arestas",
    algorithm: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
    diagram: pllDiagram("bbb", "rgr", "ogo", "ggr", [
      { from: 0, to: 2, both: true },
      { from: 3, to: 5, both: true },
    ]),
    execution: "Troca dois cantos adjacentes e duas arestas opostas.",
    memoTip: "É o T-perm precedido de R' U' F' e finalizado com U R' U R.",
  },
  {
    id: "pll-ga",
    name: "PLL Ga",
    group: "Cantos e arestas",
    algorithm: "R2 U R' U R' U' R U' R2 U' D R' U R D'",
    diagram: pllDiagram("bgo", "rrb", "goo", "bgr"),
    execution: "Ciclo de três cantos e três arestas no sentido horário.",
    memoTip: "As quatro G-perms compartilham o final U' D R' U R D'.",
  },
  {
    id: "pll-gb",
    name: "PLL Gb",
    group: "Cantos e arestas",
    algorithm: "R' U' R U D' R2 U R' U R U' R U' R2 D",
    diagram: pllDiagram("bob", "rgr", "ogg", "brо".replace("о", "o")),
    execution: "Ciclo inverso do Ga.",
    memoTip: "Começa com R' U' R U D' — a 'porta abrindo'.",
  },
  {
    id: "pll-gc",
    name: "PLL Gc",
    group: "Cantos e arestas",
    algorithm: "R2 U' R U' R U R' U R2 U D' R U' R' D",
    diagram: pllDiagram("bro", "rgb", "ggo", "bor"),
    execution: "Espelho do Ga.",
    memoTip: "Mesmo esqueleto do Ga com U trocado por U'.",
  },
  {
    id: "pll-gd",
    name: "PLL Gd",
    group: "Cantos e arestas",
    algorithm: "R U R' U' D R2 U' R U' R' U R' U R2 D'",
    diagram: pllDiagram("bbr", "rog", "gog", "bro"),
    execution: "Espelho do Gb.",
    memoTip: "Começa com o sexy move seguido de D R2.",
  },
  {
    id: "pll-h",
    name: "PLL H",
    group: "Permutação de arestas",
    algorithm: "M2 U M2 U2 M2 U M2",
    diagram: pllDiagram("bgb", "ror", "gbg", "oro", [
      { from: 1, to: 7, both: true },
      { from: 3, to: 5, both: true },
    ]),
    execution: "As quatro arestas trocam com as opostas. Não importa a orientação inicial.",
    memoTip: "O PLL mais fácil: M2 U M2 U2 M2 U M2.",
  },
  {
    id: "pll-ja",
    name: "PLL Ja",
    group: "Cantos e arestas",
    algorithm: "x R2 F R F' R U2 r' U r U2",
    diagram: pllDiagram("bbb", "rro", "ggg", "oor"),
    execution: "Troca um bloco de canto+aresta com o vizinho.",
    memoTip: "Ja e Jb são o mesmo caso girado 90°.",
  },
  {
    id: "pll-jb",
    name: "PLL Jb",
    group: "Cantos e arestas",
    algorithm: "R U R' F' R U R' U' R' F R2 U' R'",
    diagram: pllDiagram("bbr", "rrb", "ggg", "ooo"),
    execution: "Headlights à esquerda; o bloco resolvido fica atrás.",
    memoTip: "É o T-perm com R U R' F' na frente.",
  },
  {
    id: "pll-na",
    name: "PLL Na",
    group: "Cantos e arestas",
    algorithm: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
    diagram: pllDiagram("bgb", "rrr", "gbg", "ooo"),
    execution: "Dois pares diagonais de blocos trocam.",
    memoTip: "Longo, mas é T-perm no meio de dois Sunes.",
  },
  {
    id: "pll-nb",
    name: "PLL Nb",
    group: "Cantos e arestas",
    algorithm: "R' U R U' R' F' U' F R U R' F R' F' R U' R",
    diagram: pllDiagram("bgb", "rrr", "gbg", "ooo"),
    execution: "Espelho do Na.",
    memoTip: "Ritmo em três gatilhos curtos.",
  },
  {
    id: "pll-ra",
    name: "PLL Ra",
    group: "Cantos e arestas",
    algorithm: "R U' R' U' R U R D R' U' R D' R' U2 R'",
    diagram: pllDiagram("bbo", "rgr", "gog", "bro"),
    execution: "Headlights na direita; a aresta trocada fica na frente.",
    memoTip: "Ra e Rb diferem apenas no começo.",
  },
  {
    id: "pll-rb",
    name: "PLL Rb",
    group: "Cantos e arestas",
    algorithm: "R2 F R U R U' R' F' R U2 R' U2 R",
    diagram: pllDiagram("bbr", "rgo", "gog", "bro"),
    execution: "Comece com R2 F e mantenha o bloco resolvido atrás.",
    memoTip: "Contém um T-perm disfarçado no meio.",
  },
  {
    id: "pll-t",
    name: "PLL T",
    group: "Cantos e arestas",
    algorithm: "R U R' U' R' F R2 U' R' U' R U R' F'",
    alternatives: ["R U R' U' R' F R2 U' R' U R U R' F' (variação)"],
    diagram: pllDiagram("bob", "rrg", "ggg", "oro", [
      { from: 2, to: 8, both: true },
      { from: 3, to: 5, both: true },
    ]),
    execution:
      "Segure com as headlights à esquerda. Troca dois cantos adjacentes da direita e duas arestas opostas.",
    memoTip: "Sexy move → gatilho F, R2 → sexy inverso → F'. Base de vários outros PLLs.",
    videoUrl: "https://www.youtube.com/results?search_query=t+perm",
  },
  {
    id: "pll-ua",
    name: "PLL Ua",
    group: "Permutação de arestas",
    algorithm: "M2 U M U2 M' U M2",
    diagram: pllDiagram("bbb", "rgr", "ggg", "oro", [
      { from: 1, to: 5 },
      { from: 5, to: 7 },
      { from: 7, to: 1 },
    ]),
    execution: "Ciclo de três arestas no sentido anti-horário, com uma aresta já resolvida atrás.",
    memoTip: "Ua usa U no meio; Ub usa U'.",
  },
  {
    id: "pll-ub",
    name: "PLL Ub",
    group: "Permutação de arestas",
    algorithm: "M2 U' M U2 M' U' M2",
    diagram: pllDiagram("bbb", "ror", "ggg", "ogo", [
      { from: 5, to: 1 },
      { from: 1, to: 7 },
      { from: 7, to: 5 },
    ]),
    execution: "Ciclo de três arestas no sentido horário.",
    memoTip: "Espelho exato do Ua.",
  },
  {
    id: "pll-v",
    name: "PLL V",
    group: "Cantos e arestas",
    algorithm: "R' U R' U' y R' F' R2 U' R' U R' F R F",
    diagram: pllDiagram("bог".replace("о", "o").replace("г", "b"), "rgr", "gbg", "oro"),
    execution: "Troca dois cantos e duas arestas em diagonal.",
    memoTip: "Contém uma rotação y no meio — treine devagar.",
  },
  {
    id: "pll-y",
    name: "PLL Y",
    group: "Cantos e arestas",
    algorithm: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    diagram: pllDiagram("bgb", "rbr", "gog", "oro"),
    execution: "Troca diagonal de cantos e troca de arestas adjacentes.",
    memoTip: "OLL 45 (F sexy F') + T-perm final.",
  },
  {
    id: "pll-z",
    name: "PLL Z",
    group: "Permutação de arestas",
    algorithm: "M2 U M2 U M' U2 M2 U2 M' U2",
    diagram: pllDiagram("bgb", "ror", "gbg", "oro", [
      { from: 1, to: 3, both: true },
      { from: 5, to: 7, both: true },
    ]),
    execution: "Duas duplas de arestas adjacentes trocam entre si.",
    memoTip: "Parecido com o H-perm, mas com M' U2 no final.",
  },
];

const crossCases: CaseItem[] = [
  {
    id: "cross-basico",
    name: "Aresta alinhada no topo",
    group: "Fundamentos",
    algorithm: "F2",
    diagram: { top: "xwxwwwxwx", sides: { up: "xgx", right: "xxx", down: "xxx", left: "xxx" } },
    execution:
      "Posicione a aresta branca na camada de cima, alinhada com o centro da sua cor, e desça com dois giros da face.",
    memoTip: "Alinhe primeiro a cor lateral, depois desça. Nunca desça antes de alinhar.",
  },
  {
    id: "cross-invertida",
    name: "Aresta invertida",
    group: "Fundamentos",
    algorithm: "U R' D' R",
    diagram: { top: "xgxwwwxwx", sides: { up: "xwx", right: "xxx", down: "xxx", left: "xxx" } },
    execution:
      "Quando o branco aponta para o lado, insira a aresta com um único movimento em vez de dois.",
    memoTip: "Uma inserção 'de lado' economiza dois movimentos por aresta.",
  },
  {
    id: "cross-camada-meio",
    name: "Aresta presa na camada do meio",
    group: "Fundamentos",
    algorithm: "R' D' R",
    diagram: { top: "xxxxwxxxx", sides: { up: "xxx", right: "gxx", down: "xxx", left: "xxx" } },
    execution: "Tire a aresta da camada do meio para baixo e depois insira na posição correta.",
    memoTip: "Sempre trabalhe com a cruz na face de baixo para enxergar o F2L.",
  },
];

const f2lCases: CaseItem[] = [
  {
    id: "f2l-par-basico",
    name: "Par formado — inserção direta",
    group: "Casos fáceis",
    algorithm: "U R U' R'",
    diagram: { top: "xxxxyxxyx", sides: { up: "xxx", right: "xxg", down: "xxx", left: "xxx" } },
    execution: "Com o par canto+aresta já unido no topo, leve-o acima do slot e insira.",
    memoTip: "Todo F2L é uma variação de 'tirar do slot, juntar, devolver'.",
  },
  {
    id: "f2l-par-espelhado",
    name: "Par formado — inserção espelhada",
    group: "Casos fáceis",
    algorithm: "U' L' U L",
    diagram: { top: "xxxxyxxxy", sides: { up: "xxx", right: "xxx", down: "xxx", left: "oxx" } },
    execution: "Mesmo caso do anterior, mas inserindo pela esquerda.",
    memoTip: "Treine os dois lados para não perder tempo com rotações.",
  },
  {
    id: "f2l-separados",
    name: "Canto e aresta separados",
    group: "Casos intermediários",
    algorithm: "R U R' U' R U R' U' R U R'",
    diagram: { top: "xyxxyxxxx", sides: { up: "gxx", right: "xxx", down: "xxx", left: "xxo" } },
    execution: "Junte o par com um par de sexy moves antes de inserir no slot.",
    memoTip: "Se repetir três vezes, provavelmente existe um caminho mais curto — procure o par.",
  },
  {
    id: "f2l-canto-preso",
    name: "Canto preso no slot",
    group: "Casos intermediários",
    algorithm: "R U' R' U R U' R'",
    diagram: { top: "xxxxyxxxx", sides: { up: "xxx", right: "xgx", down: "xxx", left: "xxx" } },
    execution: "Extraia o canto do slot, resolva o par no topo e insira novamente.",
    memoTip: "Extrair custa 3 movimentos e economiza 10 de improviso.",
  },
];

export const cfopStages: Stage[] = [
  {
    id: "cross",
    name: "Cross",
    description:
      "A cruz branca na face de baixo. Base de todo o método: deve sair em poucos movimentos e de forma intuitiva.",
    cases: crossCases,
  },
  {
    id: "f2l",
    name: "F2L",
    description:
      "As duas primeiras camadas resolvidas simultaneamente, encaixando pares de canto e aresta.",
    cases: f2lCases,
  },
  {
    id: "oll",
    name: "OLL",
    description:
      "Orientação da última camada: deixar toda a face de cima amarela em um único algoritmo.",
    cases: ollCases,
  },
  {
    id: "pll",
    name: "PLL",
    description: "Permutação da última camada: colocar cada peça no seu lugar e finalizar o cubo.",
    cases: pllCases,
  },
];

export const grayDiagram = gray;

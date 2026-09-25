import type { Lang } from "./languages";


export type UiDict = typeof pt;

const pt = {
  nav: {
    home: "Início",
    puzzles: "Puzzles", 
    methods: "Métodos",
    myProgress: "Meu progresso",
    about: "Sobre",
    themeLabel: "Tema da interface",
    menuToggleLabel: "Abrir menu",
    themeToggleLabel: "Alternar tema",
    languageLabel: "Idioma",
  },
  home: {
    badge: "Métodos completos de speedcubing",
    headline: "Aprenda a resolver qualquer puzzle",
    subtitle: "Aprenda métodos, pratique casos e domine os algoritmos dos seus puzzles favoritos.",
    catalogEyebrow: "Catálogo",
    catalogTitle: "Escolha seu puzzle",
    catalogDescription: "Cada puzzle possui métodos completos, etapas e casos com algoritmos prontos para treinar.",
    howEyebrow: "Como funciona",
    howTitle: "Quatro passos até o cubo resolvido",
    steps: [
      { title: "Escolha seu puzzle", text: "Escolha entre os puzzles disponíveis." },
      { title: "Escolha um método", text: "Aprenda com o método que melhor se adapta ao seu objetivo." },
      { title: "Aprenda os casos", text: "Estude cada caso individualmente com diagrama, algoritmo e explicação." },
      { title: "Pratique e acompanhe", text: "Marque os casos aprendidos e veja sua evolução em cada etapa." }
    ],
  },
  about: {
    eyebrow: "Sobre",
    title: "Um curso de cubo mágico, não uma lista de algoritmos",
    description:
      "O CubeLab foi feito para quem quer evoluir de forma estruturada: escolher um puzzle, seguir um método e dominar caso a caso.",
    structureTitle: "Como o conteúdo é organizado",
    structure: [
      ["Puzzle", "2x2, 3x3, Megaminx… cada puzzle é um catálogo independente."],
      ["Método", "CFOP, LBL, Roux, Ortega — o caminho escolhido para resolver."],
      ["Etapa", "Cross, F2L, OLL, PLL — os blocos do curso dentro do método."],
      ["Caso", "Cada situação específica, com diagrama e explicação."],
      ["Algoritmo", "A fórmula em notação padrão, pronta para copiar e treinar."],
    ] as [string, string][],
    currentTitle: "Conteúdo atual",
    currentText: "O curso de CFOP para o cubo 3x3 já está disponível com as etapas Cross, F2L, OLL e PLL, incluindo os 21 casos de PLL completos. Os demais puzzles e métodos aparecem como",
    comingSoonInline: " Em breve",
    currentTextAfter: " e serão liberados com o mesmo formato.",
    startCfop: "Começar pelo CFOP",
    privacyTitle: "Progresso e privacidade",
    privacyText: "Os casos marcados como aprendidos ficam salvos localmente no seu navegador. Não é preciso criar conta para usar a plataforma.",
  },
  methodsPag: {
    libraryEyebrow: "Biblioteca",
    methodsPageDescription: "Todos os caminhos de resolução da plataforma, organizados por puzzle."
  },
  progressPag: {
    journeyEyebrow: "Sua evolução",
    progressPageDescription: "Seu progresso fica salvo neste navegador, então você pode voltar quando quiser.",
    resetProgress: "Zerar progresso",
    loading: "Carregando…",
    platformLearnedOf: (done: number, total: number) => `${done} de ${total} casos aprendidos na plataforma`,
  },
  puzzlesPag: {
    puzzlesPageDescription: "Escolha um puzzle para ver os métodos disponíveis, as etapas do curso e todos os casos com algoritmos.",
  },
  puzzleIdPag: {
    allPuzzlesBack: "← Todos os puzzles",
    methodsEyebrow: "Métodos",
    availableMethods: "Métodos disponíveis",
    otherPuzzles: "Outros puzzles",
  },
  methodIdPag: {
    learnedOf: (done: number, total: number) => `${done} de ${total} casos aprendidos`,
  },
  caseIdPag: {
    memoTips: "Dicas para memorizar",
    execTips: "Dicas de execução",
    videoTutorial: "Vídeo tutorial",
    watchVideo: "Assista à execução deste caso em vídeo",
    prev: "Anterior",
    next: "Próximo",
  },
  algorithmBlock: {
    pinAlg: "Fixar algoritmo",
    copyAlg: "Copiar algoritmo",
  },
  algorithmList: {
    algorithms: "Algoritmos",
  },
  caseCard: {
    studyCase: "Estudar caso →",
  },
  difficultyLabel: {
    difficultyOf: (n: number) => `Dificuldade ${n} de 5`,
  },
  methodCard: {
    startLearning: "Começar a aprender",
  },
  puzzleCard: {
    available: "Disponível",
    yourProgress: "Seu progresso",
    methodCount: (n: number): string => (n === 1 ? "método" : "métodos"),
    view: "Ver",
  },
  puzzleProgress: {
    open: "Abrir →",
    progress: "Progresso do puzzle",
  },
  common: {
    progress: "Progresso",
    caseLearned: "Caso aprendido",
    markLearned: "Marcar como aprendido",
    comingSoon: "Em breve",
    casesOf: (done: number, total: number) => `${done}/${total} casos`,
  },
  toaster: {
    algCopied: "Algoritmo copiado",
    algCopyError: "Não foi possível copiar",
    algPinned: "Algoritmo pinado",
  },
};

const en: UiDict = {
  nav: {
    home: "Home",
    puzzles: "Puzzles",
    methods: "Methods",
    myProgress: "My progress",
    about: "About",
    themeLabel: "Interface theme",
    menuToggleLabel: "Open menu",
    themeToggleLabel: "Toggle theme",
    languageLabel: "Language",
  },
  home: {
    badge: "Complete speedcubing methods",
    headline: "Learn to solve any puzzle",
    subtitle: "Learn methods, practice cases and master the algorithms of your favorite puzzles.",
    catalogEyebrow: "Catalog",
    catalogTitle: "Choose your puzzle",
    catalogDescription: "Each puzzle has complete methods, steps and cases with ready-to-practice algorithms.",
    howEyebrow: "How it works",
    howTitle: "Four steps to a solved cube",
    steps: [
      { title: "Choose your puzzle", text: "Choose from the available puzzles." },
      { title: "Choose a method", text: "Learn with the method that best fits your goal." },
      { title: "Learn the cases", text: "Study each case individually with diagram, algorithm and explanation." },
      { title: "Practice and track", text: "Mark the cases you've learned and watch your progress in each step." },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A cube course, not a list of algorithms",
    description: "CubeLab is made for anyone who wants to improve in a structured way: pick a puzzle, follow a method and master it case by case.",
    structureTitle: "How the content is organized",
    structure: [
      ["Puzzle", "2x2, 3x3, Megaminx… each puzzle is an independent catalog."],
      ["Method", "CFOP, LBL, Roux, Ortega — the chosen path to solve."],
      ["Step", "Cross, F2L, OLL, PLL — the course blocks within the method."],
      ["Case", "Each specific situation, with diagram and explanation."],
      ["Algorithm", "The formula in standard notation, ready to copy and practice."],
    ],
    currentTitle: "Current content",
    currentText: "The CFOP course for the 3x3 cube is already available with the Cross, F2L, OLL and PLL steps, including all 21 complete PLL cases. The other puzzles and methods appear as",
    comingSoonInline: " Coming soon",
    currentTextAfter: " and will be released in the same format.",
    startCfop: "Start with CFOP",
    privacyTitle: "Progress and privacy",
    privacyText: "Cases marked as learned are saved locally in your browser. No account is needed to use the platform.",
  },
  methodsPag: {
    libraryEyebrow: "Library",
    methodsPageDescription: "All the solving paths on the platform, organized by puzzle.",
  },
  progressPag: {
    journeyEyebrow: "Your journey",
    progressPageDescription: "Your progress is saved in this browser, so you can come back anytime.",
    resetProgress: "Reset progress",
    loading: "Loading…",
    platformLearnedOf: (done: number, total: number) => `${done} of ${total} cases learned on the platform`,
  },
  puzzlesPag: {
    puzzlesPageDescription: "Pick a puzzle to see the available methods, course steps and every case with its algorithms.",
  },
  puzzleIdPag: {
    allPuzzlesBack: "← All puzzles",
    methodsEyebrow: "Methods",
    availableMethods: "Available methods",
    otherPuzzles: "Other puzzles",
  },
  methodIdPag: {
    learnedOf: (done: number, total: number) => `${done} of ${total} cases learned`,
  },
  caseIdPag: {
    memoTips: "Memory tips",
    execTips: "Execution tips",
    videoTutorial: "Video tutorial",
    watchVideo: "Watch this case being executed",
    prev: "Previous",
    next: "Next",
  },
  algorithmBlock: {
    pinAlg: "Pin algorithm",
    copyAlg: "Copy algorithm",
  },
  algorithmList: { algorithms: "Algorithms" },
  caseCard: { studyCase: "Study case →" },
  difficultyLabel: {
    difficultyOf: (n: number) => `Difficulty ${n} of 5`,
  },
  methodCard: { startLearning: "Start learning" },
  puzzleCard: {
    available: "Available",
    yourProgress: "Your progress",
    methodCount: (n: number): string => (n === 1 ? "method" : "methods"),
    view: "View",
  },
  puzzleProgress: {
    open: "Open →",
    progress: "Puzzle progress",
  },
  common: {
    progress: "Progress",
    caseLearned: "Case learned",
    markLearned: "Mark as learned",
    comingSoon: "Coming soon",
    casesOf: (done: number, total: number) => `${done}/${total} cases`,
  },
  toaster: {
    algCopied: "Algorithm copied",
    algCopyError: "Couldn't copy",
    algPinned: "Algorithm pinned",
  },
};

const es: UiDict = {
  nav: {
    home: "Inicio",
    puzzles: "Puzzles",
    methods: "Métodos",
    myProgress: "Mi progreso",
    about: "Acerca de",
    themeLabel: "Tema de la interfaz",
    menuToggleLabel: "Abrir menú",
    themeToggleLabel: "Cambiar tema",
    languageLabel: "Idioma",
  },
  home: {
    badge: "Métodos completos de speedcubing",
    headline: "Aprende a resolver cualquier puzzle",
    subtitle: "Aprende métodos, practica casos y domina los algoritmos de tus puzzles favoritos.",
    catalogEyebrow: "Catálogo",
    catalogTitle: "Elige tu puzzle",
    catalogDescription: "Cada puzzle tiene métodos completos, etapas y casos con algoritmos listos para practicar.",
    howEyebrow: "Cómo funciona",
    howTitle: "Cuatro pasos hasta resolver el cubo",
    steps: [
      { title: "Elige tu puzzle", text: "Elige entre los puzzles disponibles." },
      { title: "Elige un método", text: "Aprende con el método que mejor se adapte a tu objetivo." },
      { title: "Aprende los casos", text: "Estudia cada caso con su diagrama, algoritmo y explicación." },
      { title: "Practica y avanza", text: "Marca los casos aprendidos y observa tu progreso en cada etapa." },
    ],
  },
  about: {
    eyebrow: "Acerca de",
    title: "Un curso de cubo mágico, no una lista de algoritmos",
    description: "CubeLab está pensado para quienes quieren avanzar de forma estructurada: elegir un puzzle, seguir un método y dominarlo caso por caso.",
    structureTitle: "Cómo se organiza el contenido",
    structure: [
      ["Puzzle", "2x2, 3x3, Megaminx… cada puzzle es un catálogo independiente."],
      ["Método", "CFOP, LBL, Roux, Ortega: el camino elegido para resolverlo."],
      ["Etapa", "Cross, F2L, OLL, PLL: los bloques del curso dentro del método."],
      ["Caso", "Cada situación específica, con diagrama y explicación."],
      ["Algoritmo", "La fórmula en notación estándar, lista para copiar y practicar."],
    ],
    currentTitle: "Contenido actual",
    currentText: "El curso de CFOP para el cubo 3x3 ya está disponible con las etapas Cross, F2L, OLL y PLL, incluidos los 21 casos completos de PLL. Los demás puzzles y métodos aparecen como",
    comingSoonInline: " Próximamente",
    currentTextAfter: " y se publicarán con el mismo formato.",
    startCfop: "Empezar con CFOP",
    privacyTitle: "Progreso y privacidad",
    privacyText: "Los casos marcados como aprendidos se guardan localmente en tu navegador. No necesitas crear una cuenta para usar la plataforma.",
  },
  methodsPag: {
    libraryEyebrow: "Biblioteca",
    methodsPageDescription: "Todas las formas de resolución de la plataforma, organizadas por puzzle.",
  },
  progressPag: {
    journeyEyebrow: "Tu evolución",
    progressPageDescription: "Tu progreso se guarda en este navegador para que puedas volver cuando quieras.",
    resetProgress: "Reiniciar progreso",
    loading: "Cargando…",
    platformLearnedOf: (done: number, total: number) => `${done} de ${total} casos aprendidos en la plataforma`,
  },
  puzzlesPag: {
    puzzlesPageDescription: "Elige un puzzle para ver los métodos disponibles, las etapas del curso y todos los casos con sus algoritmos.",
  },
  puzzleIdPag: {
    allPuzzlesBack: "← Todos los puzzles",
    methodsEyebrow: "Métodos",
    availableMethods: "Métodos disponibles",
    otherPuzzles: "Otros puzzles",
  },
  methodIdPag: {
    learnedOf: (done: number, total: number) => `${done} de ${total} casos aprendidos`,
  },
  caseIdPag: {
    memoTips: "Consejos para memorizar",
    execTips: "Consejos de ejecución",
    videoTutorial: "Videotutorial",
    watchVideo: "Mira la ejecución de este caso en vídeo",
    prev: "Anterior",
    next: "Siguiente",
  },
  algorithmBlock: {
    pinAlg: "Fijar algoritmo",
    copyAlg: "Copiar algoritmo",
  },
  algorithmList: { algorithms: "Algoritmos" },
  caseCard: { studyCase: "Estudiar caso →" },
  difficultyLabel: {
    difficultyOf: (n: number) => `Dificultad ${n} de 5`,
  },
  methodCard: { startLearning: "Empezar a aprender" },
  puzzleCard: {
    available: "Disponible",
    yourProgress: "Tu progreso",
    methodCount: (n: number): string => (n === 1 ? "método" : "métodos"),
    view: "Ver",
  },
  puzzleProgress: {
    open: "Abrir →",
    progress: "Progreso del puzzle",
  },
  common: {
    progress: "Progreso",
    caseLearned: "Caso aprendido",
    markLearned: "Marcar como aprendido",
    comingSoon: "Próximamente",
    casesOf: (done: number, total: number) => `${done}/${total} casos`,
  },
  toaster: {
    algCopied: "Algoritmo copiado",
    algCopyError: "No se pudo copiar",
    algPinned: "Algoritmo fijado",
  },
};

export const ui: Record<Lang, UiDict> = { en, es, pt };

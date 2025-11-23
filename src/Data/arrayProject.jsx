import arraySvgIcons from "./arraySvgIcons";

const iconMap = Object.fromEntries(arraySvgIcons.map(icon => [icon.title, icon]));
const getIcons = (names) => names.map(name => iconMap[name]).filter(Boolean);

// Array de projetos
const arrayProject = [
  {
    imageSrc: "/assets/images/projects/zumbal/zumbal-codigo-1.webp",
    title: "Zumbal - Desenvolvimento Acadêmico",
    description: "Projeto acadêmico desenvolvido no Unity, aplicando conceitos de Design Patterns e programação em equipe.",
    linkRepo: null,
    icons: getIcons(["C#", "Unity"]),
    highlight: false,
  },
  {
    imageSrc: "/assets/images/projects/zumbal/zumbal-codigo-2.webp",
    title: "Zumbal - Desenvolvimento Acadêmico (Parte 2)",
    description: "Continuação do projeto Zumbal, com foco na integração de funcionalidades e aplicação prática de padrões de design.",
    linkRepo: null,
    icons: getIcons(["C#", "Unity"]),
    highlight: false,
  },
  {
    imageSrc: "/assets/images/projects/zumbal/zumbal-cover.webp",
    title: "Zumbal - Cover do Projeto",
    description: "Imagem principal do projeto Zumbal, representando a interface e elementos do jogo.",
    linkRepo: null,
    icons: getIcons(["C#", "Unity"]),
    highlight: false,
  },
  {
    imageSrc: "/assets/images/projects/javabank/javabank-cover.webp",
    title: "JavaBank - Aplicação Bancária em Java",
    description: `Este projeto é uma aplicação bancária desenvolvida em Java com foco em consolidar os principais conceitos de Programação Orientada a Objetos (POO),
como herança, encapsulamento, polimorfismo, abstração e reuso de código.
A aplicação permite criar contas bancárias, realizar depósitos, saques e consultar saldo de forma simples e estruturada.
Para executar, rode os arquivos Java presentes na pasta src/javabank.`,
    linkRepo: "https://github.com/Natan-Araujo/JavaBank",
    icons: getIcons(["Java", "OOP", "Git"]),
    highlight: false,
  }
];

// Array de games favoritos (sem link, só exibição)
const arrayGames = [
  {
    imageSrc: "/assets/images/games/GameFPS.webp",
    title: "FPS Game",
    description: "Um dos games que gosto de jogar, sem relação com portfólio.",
  },
  {
    imageSrc: "/assets/images/games/GameTerror.webp",
    title: "Game de Terror",
    description: "Outro game que gosto de jogar, sem link ou deploy.",
  }
];

export { arrayProject, arrayGames };
export default arrayProject;


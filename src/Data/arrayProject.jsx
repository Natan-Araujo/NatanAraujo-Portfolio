// Imports das imagens de projetos
import ImgZumbal1 from "/assets/images/projects/zumbal/zumbal-codigo-1.webp";
import ImgZumbal2 from "/assets/images/projects/zumbal/zumbal-codigo-2.webp";
import ImgZumbalCover from "/assets/images/projects/zumbal/zumbal-cover.webp";
import ImgJavaBank from "/assets/images/projects/javabank/javabank-cover.webp";

// Imports das imagens de games
import ImgGameFPS from "/assets/images/games/GameFPS.webp";
import ImgGameTerror from "/assets/images/games/GameTerror.webp";

import arraySvgIcons from "./arraySvgIcons";

const iconMap = Object.fromEntries(arraySvgIcons.map(icon => [icon.title, icon]));
const getIcons = (names) => names.map(name => iconMap[name]).filter(Boolean);

// Array de projetos
const arrayProject = [
  {
    imageSrc: ImgZumbalCover,
    title: "Zumbal - Capa do Projeto",
    description: `Capa do projeto Zumbal, mostrando a identidade visual do jogo desenvolvido no Unity como projeto acadêmico.`,
    linkRepo: null,
    icons: getIcons(["C#", "Unity"]),
    highlight: false,
  },
  {
    imageSrc: ImgZumbal1,
    title: "Zumbal - Código Fonte 1",
    description: `Primeira parte do código do projeto Zumbal.
Implementa a estrutura inicial do jogo, incluindo movimentação, colisões e lógica básica de gameplay.`,
    linkRepo: null,
    icons: getIcons(["C#", "Unity"]),
    highlight: false,
  },
  {
    imageSrc: ImgZumbal2,
    title: "Zumbal - Código Fonte 2",
    description: `Segunda parte do código do projeto Zumbal.
Inclui funcionalidades avançadas do jogo, como inimigos, pontuação, efeitos visuais e melhorias na jogabilidade.`,
    linkRepo: null,
    icons: getIcons(["C#", "Unity"]),
    highlight: false,
  },
  {
    imageSrc: ImgJavaBank,
    title: "JavaBank - Aplicação Bancária em Java",
    description: `Este projeto é uma aplicação bancária desenvolvida em Java com foco em consolidar os principais conceitos
de Programação Orientada a Objetos (POO). Inclui herança, encapsulamento, polimorfismo, abstração e reuso de código.
A aplicação permite criar contas bancárias, realizar depósitos, saques e consultar saldo de forma simples e estruturada.
Para executar, rode os arquivos Java presentes na pasta src/javabank.`,
    linkRepo: "https://github.com/Natan-Araujo/JavaBank",
    icons: getIcons(["Java", "OOP", "Git"]),
    highlight: false,
  }
];

// Array de games favoritos
const arrayGames = [
  {
    imageSrc: ImgGameFPS,
    title: "FPS Game",
    description: "Um dos games que gosto de jogar, sem relação com portfólio.",
  },
  {
    imageSrc: ImgGameTerror,
    title: "Game de Terror",
    description: "Outro game que gosto de jogar, sem link ou deploy.",
  }
];

export { arrayProject, arrayGames };
export default arrayProject;

import ImgZumbal1 from "/assets/images/projects/zumbal-codigo-1.webp";
import ImgZumbal2 from "/assets/images/projects/zumbal-codigo-2.webp";
import ImgZumbalCover from "/assets/images/projects/zumbal-cover.webp";
import ImgJavaBank from "/assets/images/projects/javabank-cover.webp";
import arraySvgIcons from "./arraySvgIcons";

const iconMap = Object.fromEntries(arraySvgIcons.map(icon => [icon.title, icon]));

const getIcons = (names) =>
 names.map(name => iconMap[name]).filter(Boolean);

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
    description: `Primeira parte do código do projeto Zumbal. Implementa estrutura inicial do jogo, incluindo movimentação, colisões e lógica básica de gameplay.`,
    linkRepo: null,
    icons: getIcons(["C#", "Unity"]),
    highlight: false,
  },
  {
    imageSrc: ImgZumbal2,
    title: "Zumbal - Código Fonte 2",
    description: `Segunda parte do código do projeto Zumbal. Inclui inimigos, pontuação, efeitos visuais e melhorias de jogabilidade.`,
    linkRepo: null,
    icons: getIcons(["C#", "Unity"]),
    highlight: false,
  },
  {
    imageSrc: ImgJavaBank,
    title: "JavaBank - Aplicação Bancária em Java",
    description: `Aplicação bancária desenvolvida em Java utilizando os principais conceitos de Programação Orientada a Objetos. Permite criar contas, depositar, sacar e consultar saldo.`,
    linkRepo: "https://github.com/Natan-Araujo/JavaBank",
    icons: getIcons(["Java", "OOP", "Git"]),
    highlight: false,
  }
];

export default arrayProject;

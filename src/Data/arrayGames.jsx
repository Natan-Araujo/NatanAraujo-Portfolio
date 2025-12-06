import ImgGameFPS from "/assets/images/games/GameFPS.webp";
import ImgGameTerror from "/assets/images/games/GameTerror.webp";
import arraySvgIcons from "./arraySvgIcons";

const iconMap = Object.fromEntries(arraySvgIcons.map(icon => [icon.title, icon]));

  const getIcons = (names) =>
names.map(name => iconMap[name]).filter(Boolean);
  
const arrayGames = [
 
   {
    imageSrc: ImgGameFPS,
    title: "FPS Game",
    description: "Um dos meus estilos de jogo favoritos, focado em ação rápida e precisão.",
  },
  {
    imageSrc: ImgGameTerror,
    title: "Game de Terror",
    description: "Gosto bastante deste estilo por causa da imersão, tensão e do susto",
  }
];

export default arrayGames;


import ImgJavaBank from "/assets/images/projects/javaBank.webp";
import arraySvgIcons from "./arraySvgIcons";

const iconMap = Object.fromEntries(arraySvgIcons.map(icon => [icon.title, icon]));

const getIcons = (names) =>
  names.map(name => iconMap[name]).filter(Boolean);

const arrayProject = [
  
  {
    imageSrc: ImgJavaBank,
    title: "JavaBank - Aplicação Bancária em Java",
    description: `Este projeto é uma aplicação bancária desenvolvida em Java,
      com foco em consolidar os principais conceitos de Programação Orientada a Objetos (POO).
      como herança, encapsulamento, polimorfismo, abstração e reuso de código.
      A aplicação permite criar contas bancárias, realizar depósitos, saques,
      e consultar saldo de forma simples e estruturada, Para executar, basta compilar,
      e rodar os arquivos Java presentes na pasta src/javabank.
      Requisitos: Java JDK instalado e uma IDE (VS Code, Eclipse, etc),`,
    linkRepo: "https://github.com/Natan-Araujo/JavaBank",
    icons: getIcons(["Java", "OOP", "Git"]),
    highlight: false,

  },
  
];
export default arrayProject;

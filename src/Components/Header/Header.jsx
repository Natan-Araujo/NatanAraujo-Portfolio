import "./Header.scss";
import arraySvgIcons from "../../Data/arraySvgIcons";
import { SvgIcon } from "../SvgIcon/SvgIcon";

export function Header({ }) {
  return (
    <header id="header" className="d-flex justify-content-center align-items-center text-white">
      <section className="section-content py-4 px-3">

        <h2>Bem-vindos ao meu portfólio profissional!</h2>

        <h3>
          <span>Desenvolvedor Full Stack</span>
        </h3>

        <p className="pb-3">
          Meu nome é <span>Natan Araujo</span>, sou estudante de 
          <span> Engenharia de Software</span> com formação prevista para dezembro e atuo como 
          desenvolvedor <span>Full Stack</span>, com foco em Front-end utilizando 
          <span> React</span> e <span>Angular</span>, e também Back-end. <br /><br />
          Possuo experiência no desenvolvimento de aplicações web, criação de interfaces modernas, 
          responsivas e eficientes, além de conhecimento em manutenção de hardware, o que me dá 
          uma visão mais completa sobre tecnologia e infraestrutura. <br /><br />
          Meu objetivo é criar soluções que unam desempenho, design, usabilidade e boa arquitetura 
          de software, sempre buscando evoluir e entregar o melhor resultado em cada projeto.
        </p>

        <hr />
        <h3 className="mx-auto text-center p-0 m-0">Minhas</h3>
        <h3 className="mx-auto text-center mb-4 ">
          <span>Linguagens</span> & <span>Tecnologias</span>
        </h3>

        <div className="text-center mx-auto svg-content">
          {arraySvgIcons.slice(0, 16).map((icon, index) => (
            <SvgIcon
              key={index}
              {...icon}
            />
          ))}
        </div>

      </section>
    </header>
  );
}
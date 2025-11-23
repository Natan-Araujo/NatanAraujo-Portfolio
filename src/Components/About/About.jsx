import "./About.scss";
import { useState } from "react";
import FotoDePerfil from "/assets/images/fotoDePerfilNatanAraujo.webp"

export function About() {

    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    function handleMouseMove(e) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const centerX = width / 2;
        const centerY = height / 2;

        const rotateY = ((x - centerX) / centerX) * 15;
        const rotateX = -((y - centerY) / centerY) * 10;

        setTilt({ rotateX, rotateY });
    }

    function handleMouseLeave() {
        setTilt({ rotateX: 0, rotateY: 0 });
    }

    return (
        <section id="about" className="text-white py-4 border-top">

            <div className="container">

                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center ">

                    <div className="col-md-6 d-flex justify-content-center order-2 order-md-1 div-imagem">
                        <img
                            src={FotoDePerfil}
                            alt="Oi!"
                            className="rounded-4 perfil-imagem"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
                            }}
                        />
                    </div>

                    <div className="col-md-6 d-flex flex-column align-items-center mb-4 mb-md-0 order-1 order-md-2 ">
                        <h3 className="mb-4 fw-bold fs-2">Sobre Mim</h3>

                        <p className="px-2 px-md-0">
                            Sou estudante de Engenharia de software tenho 25 anos de idade e me interesso 
                            principalmente pelas áreas de Desenvolvimento Web e T.i parte de hardware Gosto de 
                            explorar como a tecnologia pode impactar positivamente o dia a dia das pessoas, seja 
                            promovendo inclusão digital, otimizando tarefas de rotinas, Desenvolvimento Web, tanto no
                            Front-End quanto no Back-End. Busco constantemente aprender novas ferramentas, 
                            entender arquiteturas, padrões e boas práticas, além de implementá-los em projetos e 
                            estudos. A tecnologia, para mim, vai além do código. Ela é uma forma de pensar e resolver 
                            problemas. Encaro os estudos e os projetos como oportunidades de aprofundar 
                            conhecimentos, construir soluções úteis e entender melhor o mundo digital em que vivemos, 
                            A tecnologia, para mim, vai além do código. Ela é uma forma de pensar e resolver problemas.
                            Encaro os estudos e os projetos como oportunidades de aprofundar conhecimentos, construir soluções úteis
                             e entender melhor o mundo digital em que vivemos, e também uma forma de buscar nova oportunidade de emprego,
                        </p>
                        <p className="px-2 px-md-0">
                            No meu tempo livre, gosto de jogar jogos eletrônicos no computador principalmente jogos 
                            de terror, FPS e aqueles com boas histórias de assustar, e valorant de FPS. Gosto de ouvir 
                            Música faz parte importante do meu dia a dia, Academia é uma das minhas rotinas, estou indo as vezes enquanto,
                            sempre acordo 5:40 da manhã de segunda a sexta, para treinar e depois ir para o trabalho, que atualmente,
                            trabalho no cartório, como auxiliar , e gostaria muito de sair de lá e ir para a minha área, de programação
                             e começar minha carreira. Além da programação e hardware também tenho curiosidade por áreas relacionadas a
                            segurança. Me interesso por segurança e gosto de entender como tudo funciona contra hackers e proteger. 
                            como tudo funciona contra hackers e proteger. 
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

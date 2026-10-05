import * as S from "./styles";

const SobreMim = () => {
  return (
    <S.ContainerSobre id="sobre">
      <S.SobreText className="animate__animated animate__fadeInRight">
        <h1>Front-End Developer</h1>
        <h2>Web Designer</h2>
      </S.SobreText>
      <S.TextPro className="animate__animated animate__fadeInLeft">
        <h3> Olá, eu sou <b>Flavio Irala</b></h3>
        <p>
          Desenvolvedor Front-end focado na criação de interfaces modernas, responsivas e experiências digitais intuitivas.
        </p>
        <p>Transformo ideias em interfaces funcionais utilizando tecnologias modernas da programação web.</p>  
      </S.TextPro>
    </S.ContainerSobre>
  );
};

export default SobreMim;

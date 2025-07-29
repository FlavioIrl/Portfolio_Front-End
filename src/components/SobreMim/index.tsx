import * as S from "./styles";

const SobreMim = () => {
  return (
    <S.ContainerSobre id="sobre">
      <S.SobreText className="animate__animated animate__fadeInRight">
        <h2>Sobre mim</h2>
        <h3>
          Atualmente estou me especializando em programação, com foco principal
          em desenvolvimento web. Concluí recentemente o curso de front-end da
          EBAC, onde desenvolvi habilidades com tecnologias modernas e boas
          práticas de desenvolvimento.
        </h3>
      </S.SobreText>
      <S.TextPro className="animate__animated animate__fadeInLeft">
        <h2>Experiência profissional</h2>
        <h3>
          Atuo no setor de TI de um mercado atacadista, realizando manutenção
          preventiva e corretiva em equipamentos e sistemas. Meu trabalho
          envolve tanto a parte de hardware (manutenção de computadores,
          impressoras e outros dispositivos), quanto a parte de software,
          oferecendo suporte a sistemas internos e servidores. Também colaboro
          com apoio logístico, organização de rede e assistência técnica aos
          demais departamentos.
        </h3>
      </S.TextPro>
    </S.ContainerSobre>
  );
};

export default SobreMim;

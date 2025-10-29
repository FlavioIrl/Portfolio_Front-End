import styled, { css } from "styled-components";

interface TechDescriptionProps {
  shadowcolor?: string;
}

const ICONS = [
  { cls: "IconHtml5",  angle:   0, color: "#e44d26" },
  { cls: "IconJS",     angle:  40, color: "#f7df1e" },
  { cls: "IconGulp",   angle:  80, color: "#cf4647" },
  { cls: "IconBoots",  angle: 120, color: "#7952b3" },
  { cls: "IconPython", angle: 160, color: "#306998" },
  { cls: "IconReact",  angle: 200, color: "#61dafb" },
  { cls: "IconVSCode", angle: 240, color: "#007acc" },
  { cls: "IconSass",   angle: 280, color: "#cc6699" },
  { cls: "IconNodeJS", angle: 320, color: "#68a063" },
];


//
// 2) O “wheel” de ícones
//
export const TechItem = styled.div`
  /*  Aumentei de 400px para 500px  */
  --wheel-size: 500px;
  /*  Offset (distância do centro) ajustado para caber tudo  */
  --icon-offset: -200px;
  /*  opcional: aumentar também o ícone um pouco  */
  --icon-size: 80px;

  position: relative;
  width:  var(--wheel-size);
  height: var(--wheel-size);
  display: flex;
  align-items: center;
  justify-content: center;

  .Icons {
    position: absolute;
    top: 50%; left: 50%;
    width:  var(--icon-size);
    height: var(--icon-size);
    transform-origin: center;
    cursor: pointer;
    transition: filter .3s, fill .3s, transform .3s ease-in-out;
  }

  ${ICONS.map(
    ({ cls, angle, color }) => css`
      .${cls} {
        transform:
          translate(-50%, -50%)
          rotate(${angle}deg)
          translateY(var(--icon-offset))
          rotate(-${angle}deg);
        fill: ${color};
        filter:
          drop-shadow(0 0 8px ${color}66)
          drop-shadow(0 0 3px ${color}4d);

        &:hover {
          filter:
            drop-shadow(0 0 15px ${color})
            drop-shadow(0 0 30px ${color}cc);
          fill: #fff;
          transform:
            translate(-50%, -50%)
            rotate(${angle}deg)
            translateY(var(--icon-offset))
            rotate(-${angle}deg)
            scale(1.1);
        }
      }
    `
  )}

  /* responsivo: você pode rebaixar os valores para telas menores */
  @media (max-width: 992px) {
    --wheel-size: 450px;
    --icon-offset: -180px;
  }
  @media (max-width: 768px) {
    --wheel-size: 400px;
    --icon-offset: -160px;
  }
  @media (max-width: 480px) {
    --wheel-size: 350px;
    --icon-offset: -140px;
    --icon-size: 70px; /* você pode até voltar o ícone a 70px aqui */
  }
`;



  
//
// 3) Descrição com box-shadow dinâmico
//
export const TechDescription = styled.p<TechDescriptionProps>`
  margin-top: 30px;
  width: 48%; max-width: 800px;
  padding: 50px;
  border-radius: 10px;
  background: #323232;
  color: #f0f0f0;
  font-size: clamp(16px, 2.5vw, 20px);
  line-height: 1.6;
  text-align: left;
  transition: box-shadow .3s ease;

  box-shadow:
    0px 0px 8px #181818,
    0 0 61px ${p => {
      const c = p.shadowcolor ?? "#00838f";
      // se vier hex de 7 chars, concatena alfa
      if (c.startsWith("#") && c.length === 7) return c + "80";
      // se vier rgba(), força opacidade 0.5
      return c.replace(
        /rgba\(([^,]+,[^,]+,[^,]+),\s*[^)]+\)/,
        "rgba($1,0.5)"
      );
    }};

  strong {
    color: ${p => p.shadowcolor ?? "#00a1afff"};
    transition: color .3s ease;
  }

  @media (max-width: 768px) {
    width: 70%;
    padding: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 1em;
  }
`;


//
// 4) Container geral
//
export const TechContainer = styled.div`
  background: #1b1b1b;
  width: 100%;
  min-height: 70vh;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
    font-size: clamp(40px, 6vw, 60px);
    color: #38bdae;
    font-weight: bold;
  }

  .content-wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  /* quando usar <TechItem className="tech-wheel-container"> */
  & .tech-wheel-container {
    flex-shrink: 0;
  }

  @media (max-width: 992px) {
    .content-wrapper {
      flex-direction: column;
      align-items: center;
    }
    .description {
      width: 90%;
      margin-bottom: 40px;
      text-align: center;
    }
  }
`;

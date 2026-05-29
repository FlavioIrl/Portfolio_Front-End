import styled, { css } from "styled-components";

interface TechDescriptionProps {
  shadowcolor?: string;
}

const ICONS = [
  { cls: "IconHtml5", angle: 0, color: "#e44d26" },
  { cls: "IconJS", angle: 40, color: "#f7df1e" },
  { cls: "IconCss", angle: 80, color: "#cf4647" },
  { cls: "IconAPI", angle: 320, color: "#1fff7c" },
];

export const TechItemContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  // background-color: black;
  // z-index: 10;
`

export const TechItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  background-image: url(../../../public/images/FundoTech.png);
  border-radius: 10px;
  transition: transform .4s ease;

  .Icons {
    width: var(--icon-size);
    height: var(--icon-size);
    transform-origin: center;
    min-width: 100px;
    height: 100px;
    cursor: pointer;
    z-index: 10;
    transition:
      filter 0.3s,
      fill 0.3s,
      transform 0.3s ease-in-out;
  }

  ${ICONS.map(
    ({ cls, angle, color }) => css`
      .${cls} {
        fill: ${color};
        &:hover,
        &.active {
          filter: drop-shadow(0 0 5px ${color})
            drop-shadow(0 0 5px ${color}cc);
          fill: #fff;
          transform: scale(1.1);
        }
      }
    `,
  )}

  /* responsivo: só ajusta o tamanho da roda e o offset dos ícones */
  @media (max-width: 992px) {
    --wheel-size: 350px;
    --icon-offset: -120px;
  }
  @media (max-width: 768px) {
    --wheel-size: 300px;
    --icon-offset: -100px;
  }
  @media (max-width: 480px) {
    --wheel-size: 250px;
    --icon-offset: -80px;
  }
`;
export const TechDescription = styled.p<TechDescriptionProps>`
  margin-top: 80px;
  width: 100%;
  padding: 50px;
  border-radius: 10px;
  background: #fff;
  color: #f0f0f0;
  font-size: clamp(16px, 2.5vw, 20px);
  line-height: 1.6;

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

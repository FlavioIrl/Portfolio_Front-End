import styled from "styled-components";

export const TechItem = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #e0e0e0;
    font-size: 16px;
    font-weight: 500;
    position: absolute;
  }

  .Icons {
    width: 70px;
    height: 70px;
    transition:
      filter 0.3s ease,
      fill 0.3s ease,
      transform 0.3s ease-in-out;
    cursor: pointer;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .IconHtml5 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateY(-150px);
    fill: #e44d26;
    filter: drop-shadow(0px 0px 8px rgba(228, 77, 38, 0.4))
      drop-shadow(0px 0px 3px rgba(179, 58, 28, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(228, 77, 38, 1))
        drop-shadow(0px 0px 30px rgba(179, 58, 28, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) translateY(-150px) scale(1.1);
    }
  }

  .IconJS {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(40deg) translateY(-150px)
      rotate(-40deg);
    fill: #f7df1e;
    filter: drop-shadow(0px 0px 8px rgba(247, 223, 30, 0.4))
      drop-shadow(0px 0px 3px rgba(189, 172, 23, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(247, 223, 30, 1))
        drop-shadow(0px 0px 30px rgba(189, 172, 23, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) rotate(40deg) translateY(-150px)
        rotate(-40deg) scale(1.1);
    }
  }

  .IconGulp {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(80deg) translateY(-150px)
      rotate(-80deg);
    fill: #cf4647;
    filter: drop-shadow(0px 0px 8px rgba(207, 70, 71, 0.4))
      drop-shadow(0px 0px 3px rgba(150, 48, 49, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(207, 70, 71, 1))
        drop-shadow(0px 0px 30px rgba(150, 48, 49, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) rotate(80deg) translateY(-150px)
        rotate(-80deg) scale(1.1);
    }
  }

  .IconBoots {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(120deg) translateY(-150px)
      rotate(-120deg);
    fill: #7952b3;
    filter: drop-shadow(0px 0px 8px rgba(121, 82, 179, 0.4))
      drop-shadow(0px 0px 3px rgba(90, 62, 134, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(121, 82, 179, 1))
        drop-shadow(0px 0px 30px rgba(90, 62, 134, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) rotate(120deg) translateY(-150px)
        rotate(-120deg) scale(1.1);
    }
  }

  .IconPython {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(160deg) translateY(-150px)
      rotate(-160deg);
    fill: #306998;
    filter: drop-shadow(0px 0px 8px rgba(48, 105, 152, 0.4))
      drop-shadow(0px 0px 3px rgba(36, 79, 114, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(48, 105, 152, 1))
        drop-shadow(0px 0px 30px rgba(36, 79, 114, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) rotate(160deg) translateY(-150px)
        rotate(-160deg) scale(1.1);
    }
  }

  .IconReact {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(200deg) translateY(-150px)
      rotate(-200deg);
    fill: #61dafb;
    filter: drop-shadow(0px 0px 8px rgba(97, 218, 251, 0.4))
      drop-shadow(0px 0px 3px rgba(73, 164, 188, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(97, 218, 251, 1))
        drop-shadow(0px 0px 30px rgba(73, 164, 188, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) rotate(200deg) translateY(-150px)
        rotate(-200deg) scale(1.1);
    }
  }

  .IconVSCode {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(240deg) translateY(-150px)
      rotate(-240deg);
    fill: #007acc;
    filter: drop-shadow(0px 0px 8px rgba(0, 122, 204, 0.4))
      drop-shadow(0px 0px 3px rgba(0, 92, 153, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(0, 122, 204, 1))
        drop-shadow(0px 0px 30px rgba(0, 92, 153, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) rotate(240deg) translateY(-150px)
        rotate(-240deg) scale(1.1);
    }
  }

  .IconSass {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(280deg) translateY(-150px)
      rotate(-280deg);
    fill: #cc6699;
    filter: drop-shadow(0px 0px 8px rgba(204, 102, 153, 0.4))
      drop-shadow(0px 0px 3px rgba(153, 76, 115, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(204, 102, 153, 1))
        drop-shadow(0px 0px 30px rgba(153, 76, 115, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) rotate(280deg) translateY(-150px)
        rotate(-280deg) scale(1.1);
    }
  }

  .IconNodeJS {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(320deg) translateY(-150px)
      rotate(-320deg);
    fill: #68a063;
    filter: drop-shadow(0px 0px 8px rgba(104, 160, 99, 0.4))
      drop-shadow(0px 0px 3px rgba(78, 120, 74, 0.3));
    &:hover {
      filter: drop-shadow(0px 0px 15px rgba(104, 160, 99, 1))
        drop-shadow(0px 0px 30px rgba(78, 120, 74, 0.8));
      fill: #ffffff;
      transform: translate(-50%, -50%) rotate(320deg) translateY(-150px)
        rotate(-320deg) scale(1.1);
    }
  }
`;

export const TechDescription = styled.p`
  margin-top: 0;
  border-radius: 10px;
  width: 48%;
  max-width: 800px;
  padding: 30px;
  background-color: #323232;
  color: #f0f0f0;
  font-size: clamp(16px, 2.5vw, 20px);
  line-height: 1.6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;

  strong {
    color: #00838f;
  }

  @media (max-width: 768px) {
    font-size: 1.1em;
    padding: 15px;
    min-height: 100px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    padding: 10px;
    min-height: 120px;
    margin-bottom: 20px;
  }
`;

export const TechContainer = styled.div`
  background-color: #1b1b1b;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  box-sizing: border-box;
  flex-direction: column;

  .content-wrapper {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    flex-wrap: wrap;
  }

  h2 {
    font-weight: bold;
    color: #38bdae;
    font-size: clamp(40px, 6vw, 60px);
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }

  ${TechItem}.tech-wheel-container {
    width: 400px;
    height: 400px;
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

    ${TechItem}.tech-wheel-container {
      width: 350px;
      height: 350px;
      margin-top: 40px;
    }
    .Icons {
      &.IconHtml5 {
        transform: translate(-50%, -50%) translateY(-120px);
        &:hover {
          transform: translate(-50%, -50%) translateY(-120px) scale(1.1);
        }
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 40px;
    }

    .description {
      width: 95%;
      padding: 20px;
      font-size: 16px;
    }

    ${TechItem}.tech-wheel-container {
      width: 300px;
      height: 300px;
    }

    .Icons {
      &.IconHtml5 {
        transform: translate(-50%, -50%) translateY(-100px);
        &:hover {
          transform: translate(-50%, -50%) translateY(-100px) scale(1.1);
        }
      }
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 35px;
    }

    .description {
      width: 100%;
      padding: 15px;
      font-size: 15px;
    }

    ${TechItem}.tech-wheel-container {
      width: 250px;
      height: 250px;
    }

    .Icons {
      &.IconHtml5 {
        transform: translate(-50%, -50%) translateY(-80px);
        &:hover {
          transform: translate(-50%, -50%) translateY(-80px) scale(1.1);
        }
      }
    }
  }
`;

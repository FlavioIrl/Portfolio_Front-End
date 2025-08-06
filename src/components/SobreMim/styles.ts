// styles.ts
import styled from "styled-components";

export const ContainerSobre = styled.div`
  background-color: #444444ff;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  overflow-x: hidden;

  h2 {
    font-size: 2.5rem;
    color: #38bdae;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 1.6;
    text-align: justify;

    @media (max-width: 600px) {
      line-height: 1.4;
    }
  }
`;

export const SobreText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 60px;
`;

export const TextPro = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 60px;
`;

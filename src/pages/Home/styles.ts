import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContainerPerfil = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const ListaGallegyWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const HomeContainer = styled.div`
  padding-top: 90px;
  background-color: #6d6d6d;

  @media (max-width: 650px) {
    padding-top: 60px;
  }
`;

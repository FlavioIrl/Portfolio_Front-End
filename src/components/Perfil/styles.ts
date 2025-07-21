import styled from "styled-components";

export const ToggleButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 15px;
  left: ${({ isOpen }) => (isOpen ? "210px" : "20px")}; // ← aqui está a mágica
  background-color: #1a1b2781;
  color: white;
  font-size: 2em;
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.4em;
  z-index: 1001;
  cursor: pointer;
  transition: background 0.3s;
  transition: left 0.3s ease; // animação suave
  &:hover {
    background-color: #0e0f17a9;
  }
`;

export const ContainerPerfil = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-280px")}; // move para fora da tela
  width: 280px;
  height: 100vh;
  background-color: #38bdae;
  font-family: "Roboto", sans-serif;
  color: #fff;
  transition: left 0.3s ease; // animação suave
  z-index: 1000;
`;
export const SideBar = styled.aside`
  display: flex;
  margin: 3em auto;
  align-items: center;

  width: 280px;
  flex-direction: column;
  height: 100vh;
`;
export const ButtonLink = styled.button`
  background-color: #1a1b27;
  border: none;
  padding: 8px 30px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  transition: transform 0.3s ease-in-out;

  .bi-github {
    margin-left: 8px;
  }

  &:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    padding: inherit;
    margin: -8px -30px;
  }
`;
export const InfoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1em;

  > img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .curso {
    font-size: 1.3em;
    font-weight: bold;
  }
  p {
    font-size: 1em;
    font-weight: bold;
    margin: 0 auto;
    width: 100%;
  }
`;

export const Repositorio = styled.div`
  margin-top: 20px;

  h2 {
    font-weight: bold;
    font-size: 3em;
  }
`;

export const LinksContatos = styled.div`
  display: flex;
  margin-bottom: 10px;

  .bi-instagram {
    margin-inline: 10px;
    padding: 1px 5px;
    font-size: 20px;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    border-radius: 5px;
  }

  .bi-facebook {
    padding: 1px 5px;
    font-size: 20px;
    background-color: #ffffffff;
    color: #0a66c2;
    border-radius: 5px;
  }

  .bi-linkedin {
    padding: 1px 5px;
    font-size: 20px;
    background-color: #0a66c2;
    border-radius: 5px;
  }
`;

import styled from "styled-components";

export const ContainerPerfil = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: #38bdae;
  font-family: roboto, sans-serif;
`;

export const SideBar = styled.aside`
  display: flex;
  margin: 3em auto;
  align-items: center; /* CORRIGIDO */

  display: flex;
  width: 350px;
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

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 2em;
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
  margin: 20px;

  h2 {
    font-weight: bold;
    font-size: 3em;
  }
`;

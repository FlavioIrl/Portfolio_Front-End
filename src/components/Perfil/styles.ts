import styled from "styled-components";

export const ToggleButton = styled.button<{ isOpen: boolean; $hidden?: boolean }>`
  position: fixed;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? "220px" : "20px")};
  background-color: ${({ isOpen }) => (isOpen ? "#31a396ff" : "#353535")};
  color: white;
  font-size: clamp(1.5em, 3vw, 2.2em);
  border: ${({ isOpen }) => (isOpen ? "2px solid #38bdae" : "none")};
  border-radius: 5px;
  padding: 0 10px;
  z-index: 1001;
  cursor: pointer;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "0 0 10px 2px #31a396aa" : "none"};

  transform: ${({ $hidden }) =>
    $hidden ? "translateY(-100%)" : "translateY(0)"};
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease,
    background 0.3s,
    box-shadow 0.3s ease,
    border 0.3s ease,
    left 0.3s ease;

  &:hover {
    background-color: ${({ isOpen }) => (isOpen ? "#2a9689ff" : "#666666ff")};
  }

  @media (max-width: 1024px) {
    top: 27px;
    left: ${({ isOpen }) => (isOpen ? "230px" : "60px")};
  }

  @media (max-width: 600px) {
    top: 20px;
    left: ${({ isOpen }) => (isOpen ? "230px" : "22px")};
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    top: 20px;
    left: ${({ isOpen }) => (isOpen ? "170px" : "20px")};
    padding: 0 8px;
  }

  .icon {
    display: inline-block;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;


export const ContainerPerfil = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-280px")};
  width: 280px;
  height: 100vh;
  background-color: #38bdae;
  font-family: "Roboto", sans-serif;
  color: #fff;
  transition: left 0.3s ease;
  z-index: 1000;

  @media (max-width: 480px) {
    width: 230px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-230px")};
  }
`;

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2em 1em;

  @media (max-width: 480px) {
    padding: 1.5em 0.5em;
  }
`;

export const InfoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .username {
    margin-top: -8px;
    font-weight: 300;
    font-size: 0.95em;
  }

  > img {
    width: clamp(100px, 30vw, 140px);
    height: clamp(100px, 30vw, 140px);
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1em;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: clamp(1.4em, 2.5vw, 2em);
    font-weight: bold;
    margin: 0.4em 0;
  }

  .curso {
    font-size: 1em;
    font-weight: 300;
    margin-top: 0.5em;
  }

  .cursoEbac {
    font-size: 1.2em;
    line-height: 1.2;
    font-weight: bold;
    margin-bottom: 1em;
  }

  p {
    font-size: clamp(0.9em, 2vw, 1em);
    font-weight: bold;
    margin: 0.3em 0;
    width: 100%;
  }

  @media (max-width: 480px) {
    .cursoEbac {
      font-size: 1em;
      margin-bottom: 0.5em;
    }

    p {
      margin: 0.2em 0;
    }
  }
`;

export const Repositorio = styled.div`
  margin-top: 20px;

  h2 {
    font-weight: bold;
    font-size: clamp(2em, 6vw, 3em);
    line-height: 1.1;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const LinksContatos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 15px 0;

  .linkedinIcon {
    background-image: url("/images/linkedinIcon.png");
  }

  .facebookIcon {
    background-image: url("/images/facebookIcon.PNG");
  }

  .instagramIcon {
    background-image: url("/images/instagramIcon.png");
  }

  @media (max-width: 480px) {
    gap: 4px;
    margin-bottom: 10px;
  }
`;

export const LinkIcon = styled.a`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: none;
  margin: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ButtonLink = styled.button`
  background-color: #1a1b27;
  border: none;
  padding: 8px 30px;
  border-radius: 5px;
  font-size: clamp(14px, 2.5vw, 16px);
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

  @media (max-width: 480px) {
    padding: 6px 20px;

    a {
      margin: -6px -20px;
    }
  }
`;

// Perfil.jsx
import { useEffect, useState } from "react";
import {
  ButtonLink,
  ContainerPerfil,
  InfoPerfil,
  LinkIcon,
  LinksContatos,
  Repositorio,
  SideBar,
  ToggleButton,
} from "./styles";

type GithubUser = {
  avatar_url: string;
  name: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

type PerfilProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const Perfil = ({ isOpen, setIsOpen }: PerfilProps) => {
  const [userData, setUserData] = useState<GithubUser | null>(null);

  useEffect(() => {
    const endpoint = "https://api.github.com/users/FlavioIrl";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do GitHub:", error);
      });
  }, []);

  const [hidePerfil, setHidePerfil] = useState(true);

  useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 10) {
      setHidePerfil(true);
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setHidePerfil(false);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  

  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        $hidden={!isOpen && hidePerfil}
      >
        <span className="icon">☰</span>
      </ToggleButton>
      
      <ContainerPerfil isOpen={isOpen} id="contatos">
        <SideBar>
          {userData ? (
            <InfoPerfil>
              <img id="avatar" src={userData.avatar_url} alt={userData.name} />
              <h1 id="name">{userData.name}</h1>
              <p className="username" id="username">@{userData.login}</p>
              <br />
              <p className="curso">Cursando</p>
              <p className="cursoEbac">EBAC Full Stack Python</p>
              <Repositorio>
                <p >Projetos GitHub</p>
                <h2 id="repository">{userData.public_repos}</h2>
              </Repositorio>
              <LinksContatos>
              <p >Meus contatos</p>
                <LinkIcon
                  className="linkedinIcon"
                  title="Contato"
                  href="https://icons8.com.br/icons/set/instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                ></LinkIcon>
                <LinkIcon
                  className="facebookIcon"
                  title="Contato"
                  href="https://icons8.com.br/icons/set/instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                ></LinkIcon>
                <LinkIcon
                  className="instagramIcon"
                  title="Contato"
                  href="https://icons8.com.br/icons/set/instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                ></LinkIcon>
              </LinksContatos>
              <ButtonLink>
                <a
                  id="link"
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver perfil no github
                  <i className="bi bi-github"></i>
                </a>
              </ButtonLink>
            </InfoPerfil>
          ) : (
            <p>Carregando dados...</p>
          )}
        </SideBar>
      </ContainerPerfil>
    </>
  );
};

export default Perfil;

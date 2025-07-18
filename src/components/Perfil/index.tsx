// Perfil.jsx
import { useEffect, useState } from "react";
import {
  ButtonLink,
  ContainerPerfil,
  InfoPerfil,
  Repositorio,
  SideBar,
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

const Perfil = () => {
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

  return (
    <ContainerPerfil>
      <SideBar>
        {userData ? (
          <InfoPerfil>
            <img id="avatar" src={userData.avatar_url} alt={userData.name} />
            <h1 id="name">{userData.name}</h1>
            <p id="username">@{userData.login}</p>
            <br />
            <p className="curso">
              EBAC Full Stack Python
            </p>
            <Repositorio>
              <p>Repositórios</p>{" "}
              <h2 id="repository">{userData.public_repos}</h2>
            </Repositorio>
            <ButtonLink>
              <a
                id="link"
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver perfil no github
              </a>
            </ButtonLink>
          </InfoPerfil>
        ) : (
          <p>Carregando dados...</p>
        )}
      </SideBar>
    </ContainerPerfil>
  );
};

export default Perfil;

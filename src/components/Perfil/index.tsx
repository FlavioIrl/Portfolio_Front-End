// Perfil.jsx
import { useEffect, useState } from "react";
import { ContainerPerfil, SideBar } from "./styles";

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
        <h1>Perfil</h1>
        {userData ? (
          <div>
            <img
              id="avatar"
              src={userData.avatar_url}
              alt={userData.name}
            />
            <h2 id="name">{userData.name}</h2>
            <p id="username">@{userData.login}</p>
            <p>Repositórios: <strong id="repository">{userData.public_repos}</strong></p>
            <p>Seguidores: <strong id="followers">{userData.followers}</strong></p>
            <p>Seguindo: <strong id="following">{userData.following}</strong></p>
            <p>
              <a id="link" href={userData.html_url} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </p>
          </div>
        ) : (
          <p>Carregando dados...</p>
        )}
      </SideBar>
    </ContainerPerfil>
  );
};

export default Perfil;

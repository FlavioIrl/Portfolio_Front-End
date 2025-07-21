import { useEffect, useState } from "react";
import { HeaderPerfil } from "./styles";

type GithubUser = {
  avatar_url: string;
  name: string;
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

const PerfilHorizontal = () => {
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
    <HeaderPerfil>
      {userData ? (
        <div className="container">
          <img
            className="profile-avatar"
            src={userData.avatar_url}
            alt={userData.name}
          />
          <h1 className="profile-name">{userData.name}</h1>
          <h2 className="profile-username">@{userData.login}</h2>
          <ul className="numbers">
            <li className="numbers-item">
              <h4>Repositórios</h4>
              <span>{userData.public_repos}</span>
            </li>
            <li className="numbers-item">
              <h4>Seguidores</h4>
              <span>{userData.followers}</span>
            </li>
            <li className="numbers-item">
              <h4>Seguindo</h4>
              <span>{userData.following}</span>
            </li>
          </ul>
          <div className="readme">
            <img
              className="readme-img"
              loading="lazy"
              height="100%"
              src="https://github-readme-stats.vercel.app/api?username=FlavioIrl&show_icons=true&theme=highcontrast"
              alt="Estatísticas do GitHub de FlavioIrl"
            />
          </div>

          <a className="profile-link" href={userData.html_url} target="_blank">
            Ver no Github
          </a>
        </div>
      ) : (
        <div>
          <p>Carregando...</p>
        </div>
      )}
    </HeaderPerfil>
  );
};

export default PerfilHorizontal;

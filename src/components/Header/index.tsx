import { useEffect, useState } from "react";
import * as S from "./styles";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <S.NavHeader $hidden={hideHeader}>
        <div className="NavContainer">
          <div className="LogoNome">
            <h2>Flávio Irala Pereira</h2>
            <p>Programador web</p>
          </div>
        </div>
      </S.NavHeader>

      <S.ContainerBottons $hideHeader={hideHeader}>
        <S.NavUl>
          <li className="isActive">
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
          <li>
            <a href="#">Tecnologias</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
        </S.NavUl>
      </S.ContainerBottons>
    </>
  );
};

export default Header;

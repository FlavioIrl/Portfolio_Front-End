import { useEffect, useState } from "react";
import * as S from "./styles";

type HeaderProps = {
  onContatoClick: () => void;
  isPerfilOpen: boolean;
};

const Header = ({ onContatoClick, isPerfilOpen }: HeaderProps) => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 10) {
      setHideHeader(false);
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setHideHeader(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId) setActiveSection(sectionId);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <S.Container>
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
          <li className={activeSection === "sobre" ? "isActive" : ""}>
            <a href="#sobre">Sobre mim</a>
          </li>
          <li
            className={
              activeSection === "contatos" || isPerfilOpen ? "isActive" : ""
            }
          >
            <a
              href="#contatos"
              onClick={(e) => {
                e.preventDefault();
                onContatoClick();
                const section = document.getElementById("contatos");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contatos
            </a>
          </li>
          <li className={activeSection === "tecnologias" ? "isActive" : ""}>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <li className={activeSection === "projetos" ? "isActive" : ""}>
            <a href="#projetos">Projetos</a>
          </li>
        </S.NavUl>
      </S.ContainerBottons>
    </S.Container>
  );
};

export default Header;

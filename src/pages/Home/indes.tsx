import { useState } from "react";
import SobreMim from "../../components/SobreMim";
import Header from "../../components/Header";
import Perfil from "../../components/Perfil";
import Tecnologias from "../../components/Tecnologias";
import { ContainerPerfil, ListaGallegyWrapper, HomeContainer } from "./styles";

const Home = () => {
  const [perfilOpen, setPerfilOpen] = useState(false);

  const togglePerfil = () => {
    setPerfilOpen((prev) => !prev);
  };
  return (
    <HomeContainer>
      <Header onContatoClick={togglePerfil} isPerfilOpen={perfilOpen} />
      {/* <PerfilHorizontal /> */}
      <ListaGallegyWrapper>
        <SobreMim />
        <Tecnologias />
      </ListaGallegyWrapper>
      <ContainerPerfil>
        <Perfil isOpen={perfilOpen} setIsOpen={setPerfilOpen} />
      </ContainerPerfil>
    </HomeContainer>
  );
};

export default Home;

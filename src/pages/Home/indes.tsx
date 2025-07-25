import SobreMim from "../../components/SobreMim";
import Header from "../../components/Header";
import Perfil from "../../components/Perfil";
// import PerfilHorizontal from "../../components/PerfilHorizontal";
import { ContainerPerfil, ListaGallegyWrapper, HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <Header />

      {/* <PerfilHorizontal /> */}
      <ListaGallegyWrapper>
        <SobreMim />
      </ListaGallegyWrapper>
      <ContainerPerfil>
        <Perfil />
      </ContainerPerfil>
    </HomeContainer>
  );
};

export default Home;

import Gallery from "../../components/Gallery";
import Perfil from "../../components/Perfil";
// import PerfilHorizontal from "../../components/PerfilHorizontal";
import { ContainerPerfil, ListaGallegyWrapper } from "./styles";

const Home = () => {
  return (
    <div>

      {/* <PerfilHorizontal /> */}
      <ListaGallegyWrapper>
        <Gallery />
      </ListaGallegyWrapper>
      <ContainerPerfil>
        <Perfil />
      </ContainerPerfil>
    </div>
  );
};

export default Home;

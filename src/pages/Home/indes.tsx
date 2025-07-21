import Gallery from "../../components/Gallery"
import Perfil from "../../components/Perfil"
import PerfilHorizontal from "../../components/PerfilHorizontal"
import { ContainerPerfil, ListaGallegyWrapper } from "./styles"

const Home = ( ) => {
    return (
        <div>
            <ContainerPerfil>
            <Perfil />

            </ContainerPerfil>

            <PerfilHorizontal />
            <ListaGallegyWrapper>
                <Gallery />
            </ListaGallegyWrapper>
        </div>
    )
}

export default Home
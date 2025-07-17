import Gallery from "../../components/Gallery"
import Perfil from "../../components/Perfil"
import { Layout, ListaGallegyWrapper } from "./styles"

const Home = ( ) => {
    return (
        <Layout>
            <Perfil />
            <ListaGallegyWrapper>
                <Gallery />
            </ListaGallegyWrapper>
        </Layout>
    )
}

export default Home
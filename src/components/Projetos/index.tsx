import * as S from "./styles"

const Projetos = () => {
    return (
     <S.ContainerProjeto>
        <S.TitleProj>
            Projetos
        </S.TitleProj>
        <S.ProjList>
            <S.ProjCenter className="row mr-0 ">
                <S.ProjItem className="col-lg-2 col-md-4 col-sm-6">
                    <h2>Item</h2>
                </S.ProjItem>
                <S.ProjItem className="col-lg-2 col-md-4 col-sm-6">
                    <h2>Item</h2>
                </S.ProjItem>
                <S.ProjItem className="col-lg-2 col-md-4 col-sm-6">
                    <h2>Item</h2>
                </S.ProjItem>
            </S.ProjCenter>
        </S.ProjList>
     </S.ContainerProjeto>
    )
}
export default Projetos;
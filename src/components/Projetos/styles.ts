import styled from "styled-components"

export const ContainerProjeto = styled.div`
    width: 100%;
    background-color: #444444ff;
`

export const TitleProj = styled.h1`
    width: 100%;
    text-align: center;
    font-size: clamp(40px, 6vw, 60px);
    color: #38bdae;
    font-weight: bold;
` 
export const ProjList = styled.div`
    background-color: #444444ff;
    margin: 0 auto;
    display: grid;
    list-style: none;
` 

export const ProjCenter = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ProjItem = styled.div`
    background-color: black;
    cursor: pointer;
    margin: 10px;
    border-radius: 10px;
    margin-right: 0;

    h2 {
        margin-top: 10px;
        text-align: center;
        font-size: clamp(20px, 3vw, 30px);
    }

`
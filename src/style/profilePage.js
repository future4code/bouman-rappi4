import styled from 'styled-components';

export const Title = styled.h2`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    padding-left: 10px;
    color: var(--black);
    `

export const Linha = styled.hr`
    width: 100% ;
    height: 2px;
    color: rgba(0, 0, 0, 0.25);
    `

export const EditContent = styled.div`
    font-family: Roboto;
    text-align: initial;
    padding-left: 10px;
    color: var(--black);
    width: 100%;
    height: 13vh;
    `

export const Paragraph = styled.p`
    width: 328px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
    `


export const Adress = styled.div`
    font-family: Roboto;
    text-align: initial;
    padding-left: 10px;
    width: 100%;
    height: 11vh;
    align-content: center;
    background: #eeeeee;
    letter-spacing: -0.39px;
    font-family: Roboto;
    display: flex-box;
    position: absolute;
    bottom: 70%;
    top: 22%;
    `

export const ParagraphDefaultAdress = styled.p`
    font-size: 16px;
    color: #b8b8b8;
    `

export const ParagraphAdress = styled.p`
    width: 328px;
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: black;
    `


export const HistoricContainer = styled.div`
    font-family: Roboto;
    text-align: initial;
    width: 100%;
    height: 5vh;
    letter-spacing: -0.39px;
    font-family: Roboto;
    display: flex-box;
    position: absolute;
    bottom: 70%;
    top: 35%;
    `
export const HistoricParagraph = styled.p`
    width: 328px;
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: black;
    padding-left: 10px;
    `

export const HistoricLine = styled.hr`
    width: 95%;
    color: black;
    `

export const ContainerOrderCard = styled.div`
    font-family: Roboto;
    width: 95%;
    height: 15vh; 
    border-radius: 10px; 
    border: solid 1px #b8b8b8;
    margin-left: 2vw;
    position: absolute;
    bottom: 40%;
    top: 43%;
    padding-left: 2vh;
    `

export const TitleOrder = styled.p`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    text-align: justify;
    word-wrap: break-word;
    max-width: 328px;
    color: #e86e5a;
    letter-spacing: -0.39px;
    `

export const DateOrderCard = styled.p`
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    text-align: justify;
    word-wrap: break-word;
    max-width: 328px;
    color: black;
    letter-spacing: -0.39px;
    `
export const SubtotalOrder = styled.p`
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    text-align: justify;
    word-wrap: break-word;
    max-width: 328px;
    color: black;
    letter-spacing: -0.39px;
    `

//  quando nao tem pedidos anteriores
export const ParagraphOnly = styled.p`
    font-size: 16px;
    font-style: normal;
    text-align: center;
    width: 328px;
    color: black;
    letter-spacing: -0.39px;
    `
export const EditData = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 8.5%;
    bottom: 80%;
    left: 90%;
    right: 10%;
    `
export const EditAdress = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 30%;
    bottom: 58%;
    left: 90%;
    right: 10%;
    `

import style from 'styled-components';

export const ContainerTwo = style.div`
  display: flex;
  align-items: center;
    justify-content: space-evenly;
  width: 100%;
  height: 150vh;
  background-color: #DEDEDE;
  `
export const ContainerText = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 600px;
  height: 567px;
  background-color: #DEDEDE;
  
`
export const ContLocalizacao = style.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 500px;
    height: 100px;
    background-color: #DEDEDE;
    border-radius: 10px;
    
    `
export const TextTitle = style.h1`
font-family: Nunito;
font-weight: 700;
font-size: 30px;
line-height: 140%;
letter-spacing: 4%;
text-align: center;
text-transform: uppercase;
color: #4f4f4f;
`
export const TextLocal = style.p`
display: flex;
width: 360px;
fle-wrap: wrap;
font-family: Nunito;
font-weight: 400;
font-size: 18px;
line-height: 140%;
letter-spacing: 5%;
`
export const Img = style.img`
  
  width: 652px;
  height: 728px;
  border-radius: 10px;
  
`
import styled from "styled-components"

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 510px;
  background-color: #E7E7EA;
  
`
export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 300px;
    z-index: 2;
    `
export const TextTopBan = styled.h1`
display: flex;
justify-content: center;
    font-family: Nunito;
font-weight: 300;
font-size: 80px;




`
export const TextSpanTop = styled.span`    
font-family: Nunito;
font-weight: 700;
font-size: 80px;




`
export const ImgBan = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: blur(100px);
    -webkit-filter: blur(0px);
    position: relative;
    z-index: 1;
`
export const TextCenterBan = styled.h2`
font-family: Nunito;
font-weight: 700;
font-size: 25px;
line-height: 100%;
letter-spacing: 30%;
text-transform: uppercase;

color: #005CFF
`
export const TextBackBan = styled.h2`
font-family: Nunito;
font-weight: 700;
font-size: 60px;
line-height: 100%;
letter-spacing: 0%;
text-transform: uppercase;
color: #005CFF;`
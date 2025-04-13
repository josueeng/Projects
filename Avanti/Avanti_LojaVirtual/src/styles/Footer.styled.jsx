import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #F5F5F5;
    color: #fff;
   height: 600px;
    width: 100%;
`;

export const FooterTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 400px;
    
`;
export const MenuFoot = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
        width: 200px;
    height: 200px;
    
`;
export const MenuItemStrong = styled.p`
font-family: Nunito Sans;
font-weight: 900;
font-size: 19px;
line-height: 100%6
letter-spacing: 0px;
color:black;
text-decoration: none;
cursor: pointer;


`
export const MenuItem = styled.p`
font-family: Nunito Sans;
font-weight: 700;
font-size: 12px;
line-height: 100%;
letter-spacing: 0px;
color:black;
text-decoration: none;
opacity: 0.8;
cursor: pointer;
`
export const MenuItemSpan = styled.span`
font-family: Nunito Sans;
font-weight: 700;
font-size: 14px;
line-height: 28px;
letter-spacing: 0%;
`
export const Lorem = styled.p`
font-family: Nunito Sans;
font-weight: 400;
font-size: 12px;
line-height: 20px;
letter-spacing: 0%;
text-align: center;
color: black;
opacity: 0.8;
width: 70%;
`
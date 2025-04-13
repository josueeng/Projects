import styled, { createGlobalStyle } from "styled-components";

// Global styles for the header component
export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    align-items: center;
    background-color: #FFFFFF; /* Background color for the header */
    position:relative;
`;

export const TopHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #005CFF;
    width: 100%;
    height: 30px;
    overflow: hidden;
`;

export const TopTexSpan = styled.span`
    border-radius: 5px;
    font-family: 'Nunito Sans', sans-serif;
    color: #FFFFFF;
    background-color: #6220c1;
`;

export const TopTextSpan1 = styled.span`
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
`;

export const TextTopHeader = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap; /* Ensures the text does not wrap */
    display: inline-block;
    animation: scroll-text 30s linear infinite; /* Creates the scrolling animation */

    @keyframes scroll-text {
        0% {
            transform: translateX(100%); /* Starts off-screen to the right */
        }
        100% {
            transform: translateX(-100%); /* Moves off-screen to the left */
        }
    }
`;

export const CenterHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    
`;

export const IconUser = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 40px;
    background-color: #FFFFFF; 
`;
export const IconUserText = styled.p`
flex-wrap: wrap;
width: 70px;
    font-family: Nunito Sans;
font-weight: 600;
font-size: 14px;
line-height: 14px;
letter-spacing: 0%;

`;

export const BackHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF; 
`;

export const MenuHam = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 70px;
    
`;
export const TextHam = styled.p`
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0%;
    color: #005CFF;
    white-space: nowrap; 
    cursor: pointer; 
`
export const TextHam1 = styled.p`
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0%;
    color: #000000;
    white-space: nowrap; 
    cursor: pointer; 
    &:hover {
      color: #000000; 
    }
`;
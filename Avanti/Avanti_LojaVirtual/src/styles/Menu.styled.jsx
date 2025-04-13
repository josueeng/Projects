import styled from "styled-components";


export const MenuItem = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

    width: 30px;
    height: 4px;
    background-color: ${({ isOpen }) => (isOpen ? "#8B7861" : "#000")};;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #8B7861;    /* Bege escuro */
    }	
`;
export const BarMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 50px;
height: 30px;
cursor: pointer;


`
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 150px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover ${MenuItem} {
        background-color: #8B7861;    
    }
    `;

export const MenuText = styled.p`
    
    font-size: 16px;
    font-weight: bold;
    color: ${({ isOpen }) => (isOpen ? "#8B7861" : "#000")}; /* Bege escuro */
    &:hover {
        color: #593E1C;    /* Bege escuro */
    }
`;
export const ContCat = styled.div`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 400px;
    background-color: #fff;
    position: absolute;
    top: 200px;
    left: 0;
    z-index: 10;
    


`;
export const ContCategorias = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px; 
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    &::-webkit-scrollbar-thumb {
        background: red; 
        border-radius: 5px;
    }
`;
export const Categoria = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
    color: ${({ isCatOpen, isCatOpenOne, isCatOpenTwo, isCatOpenThree, isCatOpenFour, isCatOpenFive, isCatOpenSix, isCatOpenSeven, isCatOpenEight, isCatOpenNine, isCatOpenTen }) => 
        (isCatOpen || isCatOpenOne || isCatOpenTwo || isCatOpenThree || isCatOpenFour || isCatOpenFive || isCatOpenSix || isCatOpenSeven || isCatOpenEight || isCatOpenNine || isCatOpenTen ? "#005CFF" : "#000")}; /* Bege escuro */
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #8B7861;  
    }
`;


export const CategoriaContainer = styled.div`
    display: display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;
export const SubCategoria = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1000px;
    height: 350px;
    flex-wrap: wrap;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        color: #8B7861; /* Bege escuro */
    }
`;

export const SubCatText = styled.p`
    font-size: 14px;
    color: #333;
    margin: 5px 0;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #8B7861;
    }
`;
export const ImgSub = styled.img`
    
    object-fit: cover;
    border-radius: 5px;
    margin-top: 10px;
`;
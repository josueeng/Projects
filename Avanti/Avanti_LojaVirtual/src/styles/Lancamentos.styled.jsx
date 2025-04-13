import styles from 'styled-components';

export const LancamentosContainer = styles.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: white;
    
`;

export const ProductsWrapper = styles.div`
    display: flex;
    height: 100%;
    background-color: white;
    overflow: hidden;
    width: 80%;
`;

export const ImgProd = styles.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
`;

export const Prod = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    width: 250px;
    height: 400px;   
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Arrow = styles.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    
    color: #ccc;
    padding: 10px;
    cursor: pointer;
    z-index: 1;

    &.left {
        left: 0;
    }

    &.right {
        right: 0;
    }
`;

export const Comprar = styles.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    width: 150px;
    height: 40px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Preco = styles.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: capitalize;
`;

export const Desco = styles.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: capitalize;
    text-decoration: line-through;
    color: #303030;
`;

export const Tag = styles.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 41px;
    height: 23px;
    background: #00264E;
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 10px;
    line-height: 22px;
    letter-spacing: 0%;
    text-transform: uppercase;
    color: white;
    border-radius: 10px;
    position: absolute;
`;

export const CampTag = styles.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 1px;
`;

export const Title = styles.p`
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: capitalize;
`;

export const Parcel = styles.p`
    font-family: Nunito Sans;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: capitalize;
`;

export const SpanPrice = styles.span`
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
`;

export const ContainerValores = styles.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    height: 100px;
`;

export const ContainerPrice = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 50px;
`;

export const Desconto = styles.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 20px;
    background: #5EC0BE;
    font-size: 12px;
    color: white;
    top: 295px;
    left: 80px;
    gap: 10px;
    border-radius: 10px;
    padding: 4px 8px;
    text-decoration: underline;
`;

export const ContTop = styles.div`
    display: flex;
    align-items: center;
    justify-content: space-around;  
    gap: 500px;
    width: 100%;
    height: 50px;
`;

export const TextTop = styles.p`
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
`;

export const Vermais = styles.p`
    font-family: Nunito Sans;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #5EC0BE;
    cursor: pointer;
`;
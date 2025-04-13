import style from 'styled-components'

export const NewsletterContainer = style.div`
    display: flex;
    width: 98vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-color: #f9f9f9;
`;

export const ImageContainer = style.div`
    width:99vw;
    position: relative;
    overflow: hidden;
`;

export const Image = style.img`
    width: 99vw;
    position: relative;
    object-fit: cover;
`;

export const ContentContainer = style.div`
display: flex;
width: 100%;
    height: 230px;
    text-align: center;
    margin-top: 1rem;
`;

export const Title = style.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
`;

export const Description = style.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
`;

export const InputContainer = style.div`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
`;

export const Input = style.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
`;

export const Button = style.button`
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
export const Text = style.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Nunito;
    font-weight: 400;
    font-size: 30px;
    line-height: 140%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    color:#FFFFFF;
    background-color:  #005CFF;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;



`;
export const Inputs = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
`;

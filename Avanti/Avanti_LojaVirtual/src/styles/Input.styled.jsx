import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    width: 600px;
    height: 40px;
    background-color: #FFFFFF; /* Background color for the input container */
    
`;

export const SearchInput = styled.input`
    flex: 1; /* Use flex: 1 for better responsiveness */
    border: none;
    padding: 10px;
    font-size: 14px;
    outline: none; 
    color: #000000; 
    &::placeholder {
        color: #000000; 
    }
`;

export const SearchButton = styled.button`
    width: 30px; /* Fixed width for the button */
    height: 30px; /* Match the height of the input */
    background-color: #FFFFFF; /* Button color */
    border: none;
    padding: 10px;
    cursor: pointer;
    display: flex; /* Ensure proper alignment for the image */
    align-items: center;
    justify-content: center;
    color: #000000;

    
`;
export const img = styled.img`

        width: 20px;
        height: 20px;
        `
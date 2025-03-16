import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #4568DC 0%, #B06AB3 100%); );
  `;
export const ContainerApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 514px;
  border-radius: 20px;
  background-color: #000000;
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;

  }
`;
export const ButtStart = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: linear-gradient(90deg, #4568DC 0%, #B06AB3 100%); );
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #ff8787;
    }
    `;
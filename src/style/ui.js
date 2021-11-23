import styled from 'styled-components';

export const ProductsField = styled.div`
  display: flex;
  width: 85%;
  margin: 2rem auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ImgBox = styled.div`
  height: 70%;
  width: 80%;
  margin: 0.3rem auto;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Img = styled.img`
  width: inherit;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ProductCard = styled.div`
  height: 26rem;
  width: 20rem;
  padding: 5px;
  margin: 1rem 2rem;
`;

export const Card = styled.div`
  height: 26rem;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition-duration: 0.5s;
  &:hover {
    border: none;
    box-shadow: 0 0 15px;
    transform: scale(1.05);
  }
  &:hover .button_box {
    display: flex;
    justify-content: space-around;
  }
  &:hover .content_hover {
    border-bottom: 1px solid black;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  height: 27%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-top: 1px solid black;
  background-color: whitesmoke;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ButtonBox = styled.div`
  display: none;
`;

export const Button = styled.button`
  border: none;
  width: 35%;
  height: 1rem;
  background-color: whitesmoke;
  &:hover {
    background-color: ${(props) => (props.red ? '#ff000059' : '#00ff7159')};
  }
`;

export const CardTitle = styled.div`
  padding: 5px;
`;

export const Price = styled.div`
  font-size: x-large;
  font-weight: bold;
`;

export const Category = styled.div`
  opacity: 0.5;
`;

export const CardDetail = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40rem;
  margin: 2rem auto;
  width: 90%;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

export const ImgDetail = styled.div`
  display: flex;
  max-width: 50%;
`;

export const Description = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: start;
  @media (max-width: 960px) {
    text-align: center;
    align-items: center;
  }
`;

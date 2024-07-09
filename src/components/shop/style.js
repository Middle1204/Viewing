import styled from 'styled-components';

export const ShopContainer = styled.div`
  margin-top: 50px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 20px 0;
`;

export const PointDisplay = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BuyButton = styled.button`
  background-color: #4F910D;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #367f07;
  }
`;

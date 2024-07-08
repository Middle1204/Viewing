import styled from 'styled-components';

export const ShopContainer = styled.div`
  padding: 20px;
  width: calc(100% - 250px); /* 사이드바 너비만큼 뺀다 */
  margin-left: 250px; /* 사이드바 너비만큼 마진을 준다 */
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
`;

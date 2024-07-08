import React from 'react';
import Nav from '../Nav/Navbar';
import { ShopContainer, Title, PointDisplay, ProductList, ProductItem } from './style';

const Shop = () => {
  const points = 120; // 예시 포인트 값

  return (
    <ShopContainer>
      <Nav
     isLoggedIn={true} />
      <Title>Shop</Title>
      <PointDisplay>{points}P</PointDisplay>
      <ProductList>
        {/* 예시 상품 데이터 */}
        <ProductItem>Product 1 - 50P</ProductItem>
        <ProductItem>Product 2 - 70P</ProductItem>
        <ProductItem>Product 3 - 100P</ProductItem>
      </ProductList>
    </ShopContainer>
  );
};

export default Shop;

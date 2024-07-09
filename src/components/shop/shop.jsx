import React, { useState } from 'react';
import Nav from '../Nav/Navbar';
import { ShopContainer, Title, PointDisplay, ProductList, ProductItem, BuyButton } from './style';

const Shop = () => {
  const [points, setPoints] = useState(120); // 예시 포인트 값
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 70 },
    { id: 3, name: 'Product 3', price: 100 },
  ]);

  const handleBuy = (price) => {
    if (points >= price) {
      setPoints(points - price);
      alert('Purchase successful!');
    } else {
      alert('Not enough points!');
    }
  };

  return (
    <ShopContainer>
      <Nav isLoggedIn={true} />
      <Title>Shop</Title>
      <PointDisplay>{points}P</PointDisplay>
      <ProductList>
        {products.map(product => (
          <ProductItem key={product.id}>
            {product.name} - {product.price}P
            <BuyButton onClick={() => handleBuy(product.price)}>Buy</BuyButton>
          </ProductItem>
        ))}
      </ProductList>
    </ShopContainer>
  );
};

export default Shop;

import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Navbar';
import { ShopContainer, Title, PointDisplay, ProductList, ProductItem, BuyButton } from './style';
import { database } from '../../firebase'; // Firebase 데이터베이스 모듈 가져오기
import { ref, onValue } from "firebase/database";

const Shop = () => {
  const [points, setPoints] = useState(0); // 초기 포인트 값을 0으로 설정
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 70 },
    { id: 3, name: 'Product 3', price: 100 },
  ]);

  useEffect(() => {
    const pointsRef = ref(database, 'Money'); // 'Money' 경로의 참조를 생성

    const unsubscribe = onValue(pointsRef, (snapshot) => {
      if (snapshot.exists()) {
        setPoints(snapshot.val()); // 데이터가 존재하면 points 상태를 업데이트
      } else {
        console.log("No data available");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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

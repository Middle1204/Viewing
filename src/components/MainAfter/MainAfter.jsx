import React from 'react';
import Nav from '../Nav/Navbar';
import { MainAfterContainer, PointCircle } from './style';

const MainAfter = () => {
  const points = 120; // 예시 포인트 값

  return (
    <MainAfterContainer>
      <Nav isLoggedIn={true} />
      <PointCircle>{points}P</PointCircle>
    </MainAfterContainer>
  );
};

export default MainAfter;

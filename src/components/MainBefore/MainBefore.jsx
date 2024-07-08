import React from 'react';
import Nav from '../Nav/Navbar';
import { MainContainer, MainText } from './style';

const MainBefore = () => {
  return (
    <MainContainer>
      <Nav
     isLoggedIn={false} />
      <MainText>로그인을 하여 지구 지키기를 시작하세요</MainText>
    </MainContainer>
  );
};

export default MainBefore;

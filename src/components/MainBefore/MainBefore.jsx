import React from 'react';
import Nav from '../Nav/Navbar';
import { MainContainer, MainText, Background, Overlay } from './style';

const MainBefore = () => {
  return (
    <MainContainer>
      <Nav
     isLoggedIn={false} />
      <Background />
      <Overlay />
      <MainText>로그인을 하여 지구 지키기를 시작하세요</MainText>
    </MainContainer>
  );
};

export default MainBefore;

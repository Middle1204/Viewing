import React from 'react';
import Nav from '../Nav/Navbar';
import { MainAfterContainer, PointRectangle, Background, Overlay, UserInfo, IconContainer, IconText, TreeIcon, EarthIcon } from './style';
import treeIcon from '../../assets/tree.png';
import earthIcon from '../../assets/earth.png';

const MainAfter = () => {
  const points = 120; // 예시 포인트 값
  const username = 'abcd1234'; // 예시 사용자 이름
  const treesPlanted = 5; // 예시 심은 나무 갯수
  const earthSavedTime = 3600; // 예시 지구를 살린 시간 (초 단위)

  return (
    <MainAfterContainer>
      <Nav isLoggedIn={true} />
      <Background />
      <Overlay />
      <UserInfo>{username}</UserInfo>
      <IconContainer>
        <TreeIcon src={treeIcon} alt="tree icon" />
        <IconText>{treesPlanted} 그루</IconText>
        <EarthIcon src={earthIcon} alt="earth icon" />
        <IconText>{earthSavedTime}S</IconText>
      </IconContainer>
      <PointRectangle>{points}P</PointRectangle>
    </MainAfterContainer>
  );
};

export default MainAfter;

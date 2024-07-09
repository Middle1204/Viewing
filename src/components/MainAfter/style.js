import styled from 'styled-components';
import backgroundImage from '../../assets/Background.jpg';

export const MainAfterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  padding-top: 50px; /* 상단바 높이만큼 패딩을 추가 */
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center center/cover;
  z-index: -2;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  z-index: 1;
`;

export const IconText = styled.div`
  margin: 5px 0;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
`;

export const TreeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const EarthIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: white;
`;

import styled from 'styled-components';
import backgroundImage from '../../assets/Background.png';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
`;

export const MainText = styled.p`
  font-size: 24px;
  text-align: center;
  padding: 0 20px;
  z-index: 15;
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

export const PointCircle = styled.div`
  margin: 300px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: rgba(79, 145, 13, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  z-index: 1;
`;

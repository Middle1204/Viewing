import styled from 'styled-components';

export const AccountContainer = styled.div`
  padding: 60px 20px 20px 20px; /* 상단바 높이 고려 */
  box-sizing: border-box;
  width: 100%;
  max-width: 390px; /* 아이폰 13 사이즈 */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const Section = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

export const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const StatText = styled.span`
  font-size: 16px;
  color: #666;
`;

export const StatValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

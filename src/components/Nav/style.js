import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #4F910D;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const HomeIcon = styled.span`
  font-size: 24px;
  cursor: pointer;
`;

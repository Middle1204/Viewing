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
  position: fixed; /* 위치를 고정 */
  top: 0; /* 화면 상단에 붙임 */
  left: 0; /* 화면 좌측에 붙임 */
  z-index: 10; /* 다른 요소들보다 앞에 위치 */
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

export const UserName = styled.span`
  color: white;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 20;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #f5f5f5;
  }
`;

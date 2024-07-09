import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, NavButton, HomeIcon } from './style';

const Nav = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HomeIcon onClick={() => navigate('/')}>&#x1F3E0;</HomeIcon>
      <div>
        {!isLoggedIn ? (
          <>
            <NavButton onClick={() => navigate('/signin')}>Sign in</NavButton>
            <NavButton onClick={() => navigate('/register')}>Register</NavButton>
          </>
        ) : (
          <>
            <NavButton onClick={() => navigate('/shop')}>Shop</NavButton>
            <NavButton onClick={() => navigate('/')}>Sign out</NavButton>
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Nav;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, NavButton, HomeIcon, UserName, DropdownMenu, DropdownItem } from './style';

const Nav = ({ isLoggedIn, username }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <HomeIcon onClick={() => navigate('/main')}>&#x1F3E0;</HomeIcon>
      <div>
        {!isLoggedIn ? (
          <>
            <NavButton onClick={() => navigate('/signin')}>Sign in</NavButton>
            <NavButton onClick={() => navigate('/register')}>Register</NavButton>
          </>
        ) : (
          <>
            <NavButton onClick={() => navigate('/shop')}>Shop</NavButton>
            <UserName onClick={handleDropdownToggle}>{username}</UserName>
            {showDropdown && (
              <DropdownMenu>
                <DropdownItem onClick={() => navigate('/account')}>My account</DropdownItem>
                <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
              </DropdownMenu>
            )}
          </>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Nav;

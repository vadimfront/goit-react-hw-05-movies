import React from 'react';
import {
  HeaderWrapper,
  Navigation,
  NavList,
  NavItem,
  NavigationLink,
} from './Header.styled';
import { Container } from 'components/Container/Container';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <NavList>
            <NavItem>
              <NavigationLink to="/">Home</NavigationLink>
            </NavItem>
            <NavItem>
              <NavigationLink to="movies">Movies</NavigationLink>
            </NavItem>
          </NavList>
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
};

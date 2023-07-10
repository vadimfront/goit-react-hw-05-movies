import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #000;
  color: #fff;
`;

const Navigation = styled.nav`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 15px;
  margin: 0;
  list-style: none;
`;

const NavItem = styled.li``;

const NavigationLink = styled(Link)`
  color: #fff;
`;

export { HeaderWrapper, Navigation, NavList, NavItem, NavigationLink };

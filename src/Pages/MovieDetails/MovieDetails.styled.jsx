import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const ListLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;
const ListLinksItem = styled.li`
  background-color: #49b0f9;
  padding: 10px;
`;

const CustomLink = styled(Link)`
  color: #fff;
`;

export { ListLinks, ListLinksItem, CustomLink };

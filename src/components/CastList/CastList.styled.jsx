import { styled } from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

const Item = styled.li``;

const Photo = styled.img`
  width: 100%;
  max-width: 200px;
`;

export { List, Item, Photo };

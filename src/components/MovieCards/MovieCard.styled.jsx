import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const CardList = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  list-style: none;
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  padding: 10px;
  color: #e8e8e8;
  line-height: 1.5;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
`;

const CardPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.6s cubic-bezier(0.23, 1, 0.32, 1);
`;

const CardItem = styled.li`
  flex-basis: 100%;
  &:hover ${CardContent} {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover ${CardPoster} {
    filter: blur(5px) brightness(50%);
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 3);
  }
  @media (min-width: 1024px) {
    flex-basis: calc((100% - 45px) / 4);
  }
`;

const CardLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const CardDescription = styled.p``;

export {
  CardList,
  CardItem,
  CardPoster,
  CardContent,
  CardTitle,
  CardDescription,
  CardLink,
};

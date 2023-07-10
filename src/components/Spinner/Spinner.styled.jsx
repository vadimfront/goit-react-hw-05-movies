import { styled } from 'styled-components';

const Overlay = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  pointer-events: none;
`;

export { Overlay };

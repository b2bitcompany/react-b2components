import styled from 'styled-components';

export default styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  align-items: stretch;

  & > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100%;
  }
`;

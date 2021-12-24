import styled from 'styled-components';

export const MenuContainer = styled.ul`
  background-color: #fff;
  position: fixed;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  z-index: 1000;
  padding: 10px;
`;

export const B2MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  margin: 5px 2px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

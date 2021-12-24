import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 30px;
`;

export const TableHeader = styled.thead``;

export const TableRow = styled.tr``;

export const TableH = styled.th`
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const TableBody = styled.tbody`
  animation: show-rightwards 0.5s ease-out, fade-in 0.5s ease-out;

  & > tr {
    border-bottom: 2px solid ${(props) => props.theme.colors.main};
  }
`;

export const TableDataCell = styled.td``;

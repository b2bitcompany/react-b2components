import styled from 'styled-components';
import { B2ButtonsPage } from '../B2ButtonsPage';

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.white.three};
  border-radius: 0.75rem;
  background-color: ${props => props.theme.colors.white.one};
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 2rem 0.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FooterMessage = styled.span`
  text-align: center;
  color: ${props => props.theme.colors.gray.ten};
  max-width: 250px;
  word-wrap: break-word;
  font-size: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
`;

export const TableHeader = styled.thead``;

export const TableRow = styled.tr`
  height: 4rem;

  &:last-child td {
    border-bottom: 0;
  }
`;

export const TableH = styled.th`
  color: ${props => props.theme.colors.gray.twelve};
  font-size: 0.875rem;
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.colors.gray.one};
  padding: 0px 2rem;

  & > div {
    display: flex;
    flex: 1;
    flex-direction: row;
  }
`;

export const TableBody = styled.tbody`
  animation: show-rightwards 0.5s ease-out, fade-in 0.5s ease-out;

  tr {
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.colors.gray.one};
    }
  }
`;

export const TableDataCell = styled.td`
  max-width: 200px;
  min-width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.75rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray.one};
  color: ${props => props.theme.colors.gray.eleven};
  font-style: normal;
  font-weight: 500;
  padding: 0px 2rem;
`;

export const ButtonsPage = styled(B2ButtonsPage)`
  padding: 0px 0.5rem;
  min-width: 250px;
  display: flex;
  justify-content: center;
  word-wrap: break-word;
`;

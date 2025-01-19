import styled from 'styled-components';

// Styled Components
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 5rem;
`;

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  background-color: #FFFB9F;
  color: #000000;
  font-weight: 600;
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  &:nth-child(even) {
    backGround-color: #ffffff;
  }
  &:nth-child(odd) {
    backGround-color: #FAF8F8;
  }
`;

export const TableCell = styled.div`
  flex: 1;
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #000000;

  &:first-child {
    font-weight: bold;
  }
`;
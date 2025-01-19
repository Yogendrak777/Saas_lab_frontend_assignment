import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

export const Button = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.active ? '#FFFB9F' : '#fff')};
  color: ${(props) => (props.active ? '#000000' : '#007BFF')};
  border-radius: 7px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:disabled {
    opacity: 0.6;
  }

  &:hover {
    background-color: ${(props) => !props.disabled && (props.active ? '##FFFB9F' : '#f0f0f0')};
  }
`;


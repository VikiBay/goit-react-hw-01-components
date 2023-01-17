import styled from 'styled-components';

export const TypeColumn = styled.td`
  text-align: center;
  text-transform: capitalize;
`;

export const TablelRow = styled.tr`
  height: 3rem;
  text-align: center;
  :nth-child(even) {
    background-color: lightgray;
  }
`;

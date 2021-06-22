import styled from 'styled-components';

export const PageBreak = styled.div`
  display: none;
  @media print {
    display: block;
    page-break-before: always !important;
    page-break-after: always !important;
    height: 140px;
    width: 100%;
  }
`;

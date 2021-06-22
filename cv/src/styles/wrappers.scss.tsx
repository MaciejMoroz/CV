import styled from 'styled-components/macro';

export const PaddingLeftRigth = styled.div`
  padding: 0 ${({ theme }) => theme.space.base};
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    padding: 0 ${({ theme }) => theme.space.primary};
  }
`;

export const PaddingTopBottom = styled.div`
  padding: ${({ theme }) => theme.space.base} 0;
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    padding: ${({ theme }) => theme.space.primary} 0;
  }
  @media print {
    padding: ${({ theme }) => theme.space.base} 0;
  }
`;

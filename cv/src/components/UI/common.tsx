import styled from 'styled-components';

export const Bold = styled.span`
  font-weight: ${({ theme }) => theme.fw.bold};
`;

export const PrimaryLink = styled.a`
  font-weight: ${({ theme }) => theme.fw.bold};
  text-decoration: underline;
  text-decoration: none;
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.lg};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.deskLG}) {
    font-size: ${({ theme }) => theme.fs.h6};
    margin-bottom: 16px;
  }
`;

export const SecondaryLink = styled(PrimaryLink)`
  display: flex;
  align-items: center;
`;

export const Ul = styled.ul`
  margin: 16px 0 16px 20px;
  font-size: ${({ theme }) => theme.fs.md};
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.lg};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.deskLG}) {
    font-size: ${({ theme }) => theme.fs.h6};
  }
`;

export const Li = styled.li`
  margin-bottom: 12px;
  line-height: normal;
`;

export const Space = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.space.base};
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    height: ${({ theme }) => theme.space.primary};
  }
`;

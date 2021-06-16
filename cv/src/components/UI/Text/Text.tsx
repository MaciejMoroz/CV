import styled, { css } from 'styled-components/macro';

// H1
export const Heading1 = styled.h1`
  font-size: ${({ theme }) => theme.fs.h3};

  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.h2};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    font-size: ${({ theme }) => theme.fs.h1};
  }
`;

// h2
export const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.fs.h4};
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.h3};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    font-size: ${({ theme }) => theme.fs.h2};
  }
`;

// h3
interface Heading3Proops {
  elipsis?: boolean;
}

export const Heading3 = styled.h3<Heading3Proops>`
  font-size: ${({ theme }) => theme.fs.h5};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.h4};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    font-size: ${({ theme }) => theme.fs.h3};
  }

  ${({ elipsis }) =>
    elipsis &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

// h4
export const Heading4 = styled.h4`
  font-size: ${({ theme }) => theme.fs.h6};
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.h5};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    font-size: ${({ theme }) => theme.fs.h4};
  }
`;

// h5
export const Heading5 = styled.h5`
  font-size: ${({ theme }) => theme.fs.lg};
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.h6};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    font-size: ${({ theme }) => theme.fs.h5};
  }
`;

// P
export const Paragraph = styled.p`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fs.md};
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.lg};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.deskLG}) {
    font-size: ${({ theme }) => theme.fs.h6};
    margin-bottom: 16px;
  }
`;

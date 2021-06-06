import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';

import { PaddingLeftRigth } from 'styles/wrappers.scss';

import { ReactComponent as ArrowSvg } from 'assets/arrow.svg';

const Button = styled.button<{ exp?: boolean }>`
  display: flex;
  background: ${({ theme }) => theme.colors.text};
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fw.bold};
  padding: ${({ theme }) => theme.space.base};
  font-size: 2.2rem;
  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.h4};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    font-size: ${({ theme }) => theme.fs.h3};
    padding: ${({ theme }) => `${theme.space.base} ${theme.space.primary}`};
  }
  ${({ exp }) =>
    exp &&
    css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.text};
      border: 1px solid ${({ theme }) => theme.colors.text};
      border-left: 0;
      border-right: 0;
      @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
        padding: ${({ theme }) => theme.space.base} 0;
      }
    `}
`;

const Icon = styled.div<IIsColapsed>`
  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 23px;
  }
  transition: all 0.4s ease-in-out;
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    display: none;
  }
  ${({ isColapsed }) =>
    isColapsed &&
    css`
      transform: rotate(180deg);
    `}
  ${({ exp }) =>
    exp &&
    css`
      svg {
        fill: ${({ theme }) => theme.colors.text};
      }
    `}
`;

const ColapsibleSection = styled.div<IIsColapsed>`
  max-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  padding: 0 ${({ theme }) => theme.space.base};
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    padding: 0 ${({ theme }) => theme.space.primary};
  }
  ${({ isColapsed }) =>
    isColapsed &&
    css`
      max-height: 500px;
      height: auto;
    `}
  ${({ exp }) =>
    exp &&
    css`
      @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
        padding: 0;
      }
    `}
`;

interface IColapsibleProps {
  heading: string;
  exp?: boolean;
}

interface IIsColapsed {
  isColapsed: boolean;
  exp?: boolean;
}

const Colapsible: React.FunctionComponent<IColapsibleProps> = ({
  heading,
  children,
  exp = false,
}) => {
  const [isColapsed, setIsColapsed] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 992) {
      setIsColapsed(true);
    }
  }, []);
  return (
    <>
      <Button onClick={() => setIsColapsed(!isColapsed)} exp={exp}>
        <span>{heading}</span>
        <Icon isColapsed={isColapsed} exp={exp}>
          <ArrowSvg />
        </Icon>
      </Button>
      <ColapsibleSection isColapsed={isColapsed} exp={exp}>
        {children}
      </ColapsibleSection>
    </>
  );
};

export default Colapsible;

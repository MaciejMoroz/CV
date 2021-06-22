import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';

import { ReactComponent as ArrowSvg } from 'assets/img/arrow.svg';

const Button = styled.button<{ exp?: boolean }>`
  display: flex;
  background: ${({ theme }) => theme.colors.secondary};
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fw.bold};
  padding: ${({ theme }) => theme.space.base};
  font-size: ${({ theme }) => theme.fs.h5};
  white-space: nowrap;

  @media screen and (min-width: ${({ theme }) => theme.bp.tab}) {
    font-size: ${({ theme }) => theme.fs.h4};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    font-size: ${({ theme }) => theme.fs.h3};
    padding: ${({ theme }) => `${theme.space.base} ${theme.space.primary}`};
    cursor: default;
  }
  ${({ exp }) =>
    exp &&
    css`
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.text};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
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
      transform-origin: 12px;
    `}
  ${({ exp }) =>
    exp &&
    css`
      svg {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    `}
  @media print {
    display: none;
  }
`;

const ColapsibleSection = styled.div<IIsColapsed>`
  max-height: 2500px;
  height: auto;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  padding: 0 ${({ theme }) => theme.space.base};
  @media screen and (min-width: ${({ theme }) => theme.bp.desk}) {
    padding: 0 ${({ theme }) => theme.space.primary};
  }
  ${({ isColapsed }) =>
    !isColapsed &&
    css`
      max-height: 0;
      overflow: hidden;
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
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (dimensions.width > 992) {
      setIsColapsed(true);
    }
  }, [dimensions]);

  const handleColapse = () => {
    if (dimensions.width < 992) {
      setIsColapsed(!isColapsed);
    }
  };

  return (
    <>
      <Button onClick={() => handleColapse()} exp={exp}>
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

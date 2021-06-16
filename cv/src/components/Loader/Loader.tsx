import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const bounce = keyframes`
  0% {
    transform: translate(0, 0);
    height: 32px;
    opacity: 1;
  }

  50% {
    transform: translate(0, 30px);
    height: 24px;
  }

  100% {
    transform: translate(0, 0);
    height: 32px;
    background: white;


  }
`;

interface IBalProps {
  animationDeley: number;
}

const Ball = styled.div<IBalProps>`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  margin-left: ${({ theme }) => theme.space.base};
  animation: ${bounce} 0.6s ease infinite;
  animation-delay: ${({ animationDeley }) => animationDeley}s;
  opacity: 0.5;
`;

const Loader: React.FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Ball animationDeley={0} />
        <Ball animationDeley={0.15} />
        <Ball animationDeley={0.3} />
      </Wrapper>
    </>
  );
};

export default Loader;

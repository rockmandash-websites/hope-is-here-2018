import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/core';
import bg from 'images/bg.jpg';
import { useWindowSize } from 'react-use';

const rotate = keyframes`
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to {
    transform: translate(-50%,-50%) rotate(360deg);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: black;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: auto;
  animation: ${rotate} 180s linear infinite;
`;

const BgAnimation = () => {
  const { width, height } = useWindowSize();

  return (
    <Container>
      <Image src={bg} style={{ width: (width ** 2 + height ** 2) ** 0.5 }} />
    </Container>
  );
};

export default memo(BgAnimation);

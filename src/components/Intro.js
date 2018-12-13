import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import LogoAnimation from './LogoAnimation';
import Buttons from './Buttons';

const Container = styled.div`
  position: relative;
`;

const Intro = () => {
  return (
    <Container>
      <LogoAnimation />
      <Buttons />
    </Container>
  );
};

export default memo(Intro);

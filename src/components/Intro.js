import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import LogoAnimation from './LogoAnimation';

const Container = styled.div`
  position: relative;
`;

const Intro = () => {
  return (
    <Container>
      <LogoAnimation />
    </Container>
  );
};

export default memo(Intro);

import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import LogoAnimation from './LogoAnimation';
import Buttons from './Buttons';
import { Match } from '@reach/router';

const Container = styled.div`
  position: relative;
`;

const Intro = () => {
  return (
    <Match path="/">
      {({ match }) =>
        match && (
          <Container>
            <LogoAnimation />
            <Buttons />
          </Container>
        )
      }
    </Match>
  );
};

export default memo(Intro);

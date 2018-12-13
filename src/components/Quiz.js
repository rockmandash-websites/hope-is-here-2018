import React, { memo, useRef, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { Match } from '@reach/router';
import { makeWidget } from '@typeform/embed';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Quiz = () => {
  const ContainerRef = useRef(null);

  useEffect(() => {
    makeWidget(
      ContainerRef.current,
      'https://josephwang.typeform.com/to/DV5pc8',
      {
        opacity: 0,
        hideScrollbars: true,
        hideFooter: true,
        hideHeaders: true
      }
    );
  });

  return (
    <Match path="/quiz">
      {({ match }) => (
        <Container
          ref={ContainerRef}
          style={{ display: match ? 'block' : 'none' }}
        />
      )}
    </Match>
  );
};

export default memo(Quiz);

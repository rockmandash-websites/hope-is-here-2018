import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import { Match } from '@reach/router';
import { HeaderHeight } from 'sharedStyles';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - ${HeaderHeight}px);
  margin: ${HeaderHeight}px 0 0 0;
`;

const Quiz = () => {
  return (
    <Match path="/quiz">
      {({ match }) => (
        <Container style={{ display: match ? 'block' : 'none' }}>
          <div
            className="typeform-widget"
            data-url="https://josephwang.typeform.com/to/DV5pc8"
            data-transparency="100"
            data-hide-headers="true"
            data-hide-footer="true"
            style={{ width: '100%', height: '100%' }}
          />
        </Container>
      )}
    </Match>
  );
};

export default memo(Quiz);

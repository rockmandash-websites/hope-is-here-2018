import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import { importMDX } from 'mdx.macro';
import { Match } from '@reach/router';
import hr from 'images/hr.png';
import { HeaderHeight } from 'sharedStyles';

const RundownMD = React.lazy(() => importMDX('../Rundown.mdx'));

const Container = styled.div`
  position: relative;
  color: white;
  font-size: 1rem;
  max-width: 900px;
  width: 100%;
  height: calc(100vh - ${HeaderHeight}px);
  margin: ${HeaderHeight}px auto 0;
  @media (min-width: 375px) {
    font-size: 1.1rem;
  }
  @media (min-width: 425px) {
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  & h1 {
    font-size: 2em;
    font-weight: 900;
    text-align: center;
    letter-spacing: 5px;
  }
  & h2 {
    font-size: 1.8em;
    font-weight: 600;
    margin: 2em 0 1em;
  }
  & h3 {
    font-size: 1.6em;
    font-weight: 600;
    margin: 1em 0;
  }
  & p {
    font-weight: 300;
    font-size: 1.2em;
    letter-spacing: 1px;
    text-align: justify;
    margin: 1em 0;
  }
  & hr {
    margin: 2em 0;
    height: 6px;
    background: url(${hr}) repeat-x 0 0;
    border: 0;
  }
  & blockquote {
    padding-left: 1.2em;
    border-left: 2px solid #fff;
    & p {
      font-weight: 600;
    }
  }

  & ul {
    text-align: center;
    margin: 3em 0;
    border: 1px solid white;
    padding: 2em 0;

    li {
      font-weight: 300;
      font-size: 1.2em;
      letter-spacing: 1px;
    }
  }

  & a {
    color: white;
    border-bottom: 1px solid white;
    &:active {
      color: white;
    }
  }

  & img {
    width: 100%;
    height: auto;
  }

  overflow: hidden;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 16px;

  overflow: scroll;
`;

const Rundown = () => {
  return (
    <Match path="/rundown">
      {({ match }) =>
        match && (
          <Container>
            <InnerContainer>
              <React.Suspense fallback={<div>Loading...</div>}>
                <RundownMD />
              </React.Suspense>
            </InnerContainer>
          </Container>
        )
      }
    </Match>
  );
};

export default memo(Rundown);

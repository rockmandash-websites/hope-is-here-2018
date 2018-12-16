import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import { HeaderHeight } from 'sharedStyles';
import { Location } from '@reach/router';
import SecondaryButton from './SecondaryButton';
import { navigate } from '@reach/router';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HeaderHeight}px;
  border-bottom: 1px solid white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleQuizClick = () => {
    navigate('/quiz');
  };
  const handleRundownClick = () => {
    navigate('/rundown');
  };
  return (
    <Location>
      {({ location }) => {
        const isQuizPage = location.pathname.includes('quiz');
        const isRundownPage = location.pathname.includes('rundown');
        if (!(isQuizPage || isRundownPage)) {
          return null;
        }

        return (
          <Container>
            <SecondaryButton onClick={handleHomeClick}>
              <ChevronLeft />
              回首頁
            </SecondaryButton>
            {isQuizPage ? (
              <SecondaryButton onClick={handleRundownClick}>
                <ChevronRight />
                看節目流程
              </SecondaryButton>
            ) : (
              <SecondaryButton onClick={handleQuizClick}>
                玩節目測驗
                <ChevronRight />
              </SecondaryButton>
            )}
          </Container>
        );
      }}
    </Location>
  );
};

export default memo(Header);

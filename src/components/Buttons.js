import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import PrimaryButton from './PrimaryButton';
import { navigate } from '@reach/router';

const Container = styled.div`
  position: relative;
`;

const Buttons = () => {
  const handleQuizClick = () => {
    navigate('/quiz');
  };
  const handleRundownClick = () => {
    navigate('/rundown');
  };
  return (
    <Container>
      <PrimaryButton onClick={handleQuizClick}>玩節目測驗</PrimaryButton>
      <PrimaryButton onClick={handleRundownClick}>去看節目單</PrimaryButton>
    </Container>
  );
};

export default memo(Buttons);

import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import PrimaryButton from './PrimaryButton';
import { navigate } from '@reach/router';
import { keyframes } from '@emotion/core';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 1s ease 2s 1 forwards;
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

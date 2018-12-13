import React from 'react';
import BgAnimation from 'components/BgAnimation';
import GlobalStyle from 'components/GlobalStyle';
import Intro from 'components/Intro';
import Quiz from 'components/Quiz';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BgAnimation />
      <Intro />
      <Quiz />
    </>
  );
};

export default App;

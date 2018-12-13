import React from 'react';
import BgAnimation from 'components/BgAnimation';
import GlobalStyle from 'components/GlobalStyle';
import Intro from 'components/Intro';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BgAnimation />
      <Intro />
    </>
  );
};

export default App;

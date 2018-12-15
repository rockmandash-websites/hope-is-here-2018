import React from 'react';
import BgAnimation from 'components/BgAnimation';
import GlobalStyle from 'components/GlobalStyle';
import Intro from 'components/Intro';
import Quiz from 'components/Quiz';
import Rundown from 'components/Rundown';
import Pageview from 'components/Pageview';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Pageview />
      <BgAnimation />
      <Intro />
      <Quiz />
      <Rundown />
    </>
  );
};

export default App;

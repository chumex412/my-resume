import React from 'react';
// Components
import Header from './Components/Header';
import Main from './Components/Main';

import GlobalStyle from './Components/GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
};

export default App;

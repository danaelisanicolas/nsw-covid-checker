import React from 'react';
import Main from './components/Main';

import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

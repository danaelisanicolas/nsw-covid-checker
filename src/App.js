import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CasesList from './components/CasesList';
import Footer from './components/Footer';

import CasesContextProvider from './contexts/CasesContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CasesContextProvider>
        <CasesList />
      </CasesContextProvider>
      <Footer />
    </div>
  );
}

export default App;

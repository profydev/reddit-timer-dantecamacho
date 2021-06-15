import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Search from '../search/Search';
import About from '../about/About';
import HowItWorks from '../how-it-works/HowItWorks';

function App() {
  return (
    <>
      <Header />
      <Route path={['/search']} component={Search} />
      <Route path={['/about']} component={About} />
      <Route path={['/how-it-works']} component={HowItWorks} />
    </>
  );
}

export default App;

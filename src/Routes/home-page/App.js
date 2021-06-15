import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../Components/styles/styles';

function App() {
  return (

    <Wrapper>
      <div>
        App Placeholder
      </div>
      <Link to="/search">
        Search
      </Link>
      <Link to="/how-it-works">
        How it works
      </Link>
      <Link to="/about">
        About
      </Link>

    </Wrapper>
  );
}

export default App;

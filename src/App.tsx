import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [shouldShowThing, setShouldShowThing] = useState(false);
  const [shouldShowOtherThing, setShouldShowOtherThing] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      // fake API request delay
      await new Promise(resolve => setTimeout(resolve, 200));
      setShouldShowThing(true);
      setShouldShowOtherThing(false);
    }
    fetchData();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {shouldShowThing &&
          <p>some thing</p>
        }
        {shouldShowOtherThing &&
          <p>some other thing</p>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

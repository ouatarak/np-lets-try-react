import React from 'react';
import logo from './logo.svg';
import { Button, Icon } from 'semantic-ui-react';
import './App.css';
import ModalExampleCloseIcon from './test.js';
import GridExampleContainer from './test1.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          I am adding some text!!!
        </p>

        <ModalExampleCloseIcon />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button size="medium" color="pink">
          <Icon name="download" />
          Download
        </Button>
        <GridExampleContainer />
      </header>
    </div>
  );
}

export default App;

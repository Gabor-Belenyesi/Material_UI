import logo from './logo.svg'
import './App.css'
import { Button, Checkbox } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="outlined">Hello Codecool</Button>
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disabled checked />

      </header>
    </div>
  );
}

export default App

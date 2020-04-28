import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './comps/Header'
import TextBox from './comps/TextBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L.png" className="App-logo" alt="logo" />

        <Header/>
        <TextBox/>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Aside from './componentes/Aside';
// import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Aside/>
      </div>
    );
  }
}
export default App;

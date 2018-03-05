import React, { Component } from 'react';
// importando css del componenete
import '../App.css';

// Notas:
// no permite comentarios dentro del componente
// las etiquetas deben cerrarse incluso hr

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Grace Hopper</h1>
        <hr></hr>
      </header>
    );
  }
}
export default Header;

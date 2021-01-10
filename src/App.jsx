import React from 'react';
import './App.css';
import About from './components/About';
import Office from './components/Office';
import Area from './components/Area';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      {/* <header class="navbar">
        <a href="/" class="navbar-logo">
          Rabello & Rabello
        </a>
        <nav class="navbar-menu">
          <ul>
            <li>
              <a href="/">Quem Somos</a>
            </li>
            <li>
              <a href="/">O escritório</a>
            </li>
            <li>
              <a href="/">Áreas de atuação</a>
            </li>
            <li>
              <a href="/">Contate-nos</a>
            </li>
          </ul>
        </nav>
      </header> */}

      <div className="header">
        <h1 className="logo">Rabello & Rabello Sociedade de Advogados</h1>
      </div>

      <About title="Quem somos" />

      <Office title="O Escritório" />

      <Area />

      <Contact />
    </div>
  );
}

export default App;

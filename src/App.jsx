import React from 'react';
import './App.css';
import About from './components/About';
import Office from './components/Office';
import Area from './components/Area';
import Contact from './components/Contact';
import Values from './components/Values';

function App() {
  return (
    <div>
      <div className="header">
        <h1 className="logo">Rabello & Rabello Sociedade de Advogados</h1>
      </div>
      <Office title="O Escritório" />
      <About title="Quem Somos" />
      <Values title="Nossos Valores" />
      <Area title="Onde Atuamos" />
      <Contact title="Entre em Contato" />
    </div>
  );
}

export default App;

import './HeaderLinks.css';
import React from 'react';

const Menu = () => {  // Menu contendo ínicio, genêro, ofertas, mais vendidos e infantil 
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="/">Início</a>
        </li>
        <li className="menu-item">
          <a href="/">Gênero</a>
        </li>
        <li className="menu-item">
          <a href="/">Ofertas</a>
        </li>
        <li className="menu-item">
          <a href="/">Mais Vendidos</a>
        </li>
        {/* <li className="menu-item">
          <a href="/">Infantil</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Menu;


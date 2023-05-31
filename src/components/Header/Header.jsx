import './Header.css';
import React from 'react';
import Lupa from '../../assets/images/lupa.png';
import LogoImg from '../../assets/images/logo.png';
import Cart from '../../assets/images/cart.png';


const Cabecalho = () => {  //Cabesalho do site, contendo logo. input de pesquisa info minha conta e carrinho de compras
  return (
    <header>     
      <div className="logo">
        <img src={LogoImg} alt="Logo-site" />
      </div>
      <div className="pesquisa-bar">
        <div className="pesquisa-bar-container">
          <input type="text" placeholder='  Pesquisar' />
          <div className="pesquisa-icon">
            <img src={Lupa} alt="Ícone de busca" />
          </div>
        </div>
      </div>
      <div className="info-conta">
        <h5>minha conta</h5>
      </div>
      <div className="cart">
        <a href="/#"><img src={Cart} alt="cart" /></a>
      </div>
    </header>
  );
}

export default Cabecalho;

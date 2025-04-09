import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import insideLogo from "../../assets/inside.png";
import lojasIcon from "../../assets/icons/lojas.png";
import contatoIcon from "../../assets/icons/contato.png";
import loginIcon from "../../assets/icons/login.png";
import cartIcon from "../../assets/icons/cart.png";
import searchIcon from "../../assets/icons/busca.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <span>FRETE GRÁTIS*</span> | <span>DEVOLUÇÃO AUTOMÁTICA</span> |{" "}
        <span>TROCA GRÁTIS* EM LOJA</span> |{" "}
        <span>
          PARCELAMENTO ATÉ <strong>10X SEM JUROS*</strong>
        </span>{" "}
        | <span>TELEATENDIMENTO: (21) 2503-6897</span>
      </div>

      <div className="navbar-main">
        <div className="navbar-left">
          <img src={lojasIcon} alt="Lojas" className="icon" />
          <img src={contatoIcon} alt="Contato" className="icon" />
        </div>

        <div className="navbar-center">
          <Link to="/" className="navbar-brand">
            ANIMALE
          </Link>
          <ul className="navbar-links">
            <li>
              <a href="#">NOVIDADES</a>
            </li>
            <li>
              <Link to="/colecao">COLEÇÃO</Link>
            </li>
            <li>
              <a href="#">JOIAS</a>
            </li>
            <li>
              <a href="#">SALE</a>
            </li>
            <li>
              <a href="#">
                <img src={insideLogo} alt="Inside" className="inside-logo" />
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <img src={searchIcon} alt="Buscar" className="icon" />
          <div className="user">
            <img src={loginIcon} alt="Login" className="icon" />
            <span>
              Olá, <strong>fernanda</strong>
            </span>
          </div>
          <div className="cart">
            <img src={cartIcon} alt="Carrinho" className="icon" />
            <span className="cart-count">1</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

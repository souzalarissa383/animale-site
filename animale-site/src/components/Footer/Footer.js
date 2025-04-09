import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>NEWSLETTER</h3>
              <p>Cadastre-se para receber nossas novidades e promoções.</p>
            </div>
            <div className="newsletter-form">
              <input type="text" placeholder="NOME" />
              <input type="email" placeholder="E-MAIL" />
              <button type="submit">OK</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-links">
          <li>
            <a href="#">A MARCA</a>
          </li>
          <li>
            <a href="#">MINHA CONTA</a>
          </li>
          <li>
            <a href="#">POLÍTICAS</a>
          </li>
          <li>
            <a href="#">FORMAS DE PAGAMENTO</a>
          </li>
          <li>
            <a href="#">WHATSAPP</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

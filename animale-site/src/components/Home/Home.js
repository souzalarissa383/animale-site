import React from "react";
import "./Home.scss";
import image1 from "../../assets/home_01/image1.png";
import image2 from "../../assets/home_01/image2.png";
import image3 from "../../assets/home_01/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row row-2">
        <div className="col-black" id="right-align">
          <h3>Inside animale</h3>
          <h4>Fique por dentro do Universo Animale com apenas um clique.</h4>
          <a href="">SHOP NOW</a>
        </div>
        <div className="col">
          <img
            src={image5}
            alt="Descrição da imagem"
            className="full-width-image"
          />
        </div>
      </div>

      <div className="row row-2">
        <div className="col">
          <img
            src={image6}
            alt="Descrição da imagem"
            className="full-width-image"
          />
        </div>
        <div className="col-black" id="left-align">
          <h3>CORES DA CIDADE</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </h4>
          <a href="">SHOP NOW</a>
        </div>
      </div>

      <div className="row row-1">
        <div className="col">
          <div className="image-container">
            <img src={image4} alt="Imagem com texto" />
            <div className="overlay-text">
              <h3>Inside animale</h3>
              <h4>
                Fique por dentro do Universo Animale com apenas um clique.
              </h4>
              <a href="">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-3 full-screen-images">
        <div className="col">
          <img
            src={image1}
            alt="Descrição da imagem"
            className="full-width-image"
          />
        </div>
        <div className="col">
          <img
            src={image2}
            alt="Descrição da imagem"
            className="full-width-image"
          />
        </div>
        <div className="col">
          <img
            src={image3}
            alt="Descrição da imagem"
            className="full-width-image"
          />
        </div>
      </div>

      <div className="row row-3">
        <div className="col">
          <h3>Lunar</h3>
          <h4>
            De Sevilla, capital do flamenco, o vestuário típico da dança mais
            celebrada da Espanha inspira as novas peças da coleção.
          </h4>
          <a href="">SHOP NOW</a>
        </div>
        <div className="col">
          <h3>Flutua</h3>
          <h4>
            A natureza dos célebres jardins espanhóis dá vida às estampas
            florais.
          </h4>
          <a href="">SHOP NOW</a>
        </div>
        <div className="col">
          <h3>FLASH LIGHTS</h3>
          <h4>
            O último editorial também se inspira em Barcelona, cidade iluminada
            pelo sol. Conheça as cores que são aposta da coleção.
          </h4>
          <a href="">SHOP NOW</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

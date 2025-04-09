import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailsProduct.scss";

const DetailsProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/products.json");

        if (!response.ok) {
          throw new Error("Erro ao carregar os produtos");
        }

        const data = await response.json();
        const selectedProduct = data.find(
          (p) => String(p.productId) === String(productId)
        );

        console.log("Produto selecionado:", selectedProduct);
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  if (loading) return <p>Carregando...</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  const priceData = product.items?.[0]?.sellers?.[0]?.commertialOffer;
  const priceVista = priceData?.Price?.toFixed(2);
  const priceParcelado = priceData?.Installments?.[0];

  const productDescription =
    product.description ||
    product.metaTagDescription ||
    "Descrição não disponível.";

  const availableQuantity =
    product.items?.[0]?.sellers?.[0]?.commertialOffer?.AvailableQuantity || 0;
  const maxStars = 5;
  const ratingStars =
    "★".repeat(Math.min(availableQuantity, maxStars)) +
    "☆".repeat(maxStars - Math.min(availableQuantity, maxStars));

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="details-product">
      <div className="product-gallery">
        {product.items?.[0]?.images?.map((img, index) => (
          <img
            key={index}
            src={img.imageUrl}
            alt={product.productName}
            loading="lazy"
            onClick={() => openModal(img.imageUrl)}
            onError={(e) => {
              e.target.src = "/no-image.jpg";
            }}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Imagem ampliada" />
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="product-info">
        <h1>{product.productName}</h1>
        <div className="price">
          <p className="vista">R$ {priceVista} à vista</p>
          {priceParcelado && (
            <p className="parcelado">
              ou {priceParcelado.NumberOfInstallments}x de R${" "}
              {priceParcelado.Value.toFixed(2)}
            </p>
          )}
        </div>

        <div className="size-selection">
          <span>Tamanho:</span>
          <div className="size-buttons">
            {["PP", "P", "M", "G", "GG"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => handleSizeSelection(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="product-links">
          <a href="/provador-virtual" className="product-link">
            PROVADOR VIRTUAL
          </a>
          <a href="/guia-de-tamanhos" className="product-link">
            GUIA DE TAMANHOS
          </a>
        </div>

        <button className="add-to-cart">ADICIONAR À SACOLA</button>

        <div className="product-description">
          <span>Descrição:</span>
          {product.description ? (
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          ) : (
            <p>{productDescription}</p>
          )}
        </div>

        <div className="product-rating">
          <span className="stars">{ratingStars}</span>
          <span className="quantity">({availableQuantity} avaliações)</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;

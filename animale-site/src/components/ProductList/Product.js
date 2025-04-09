import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";

const Product = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product) {
    return <div className="product">Produto não encontrado.</div>;
  }

  const imageUrl = product.items?.[0]?.images?.[0]?.imageUrl || "/no-image.jpg";
  const paymentOption =
    product?.items?.[0]?.sellers?.[0]?.commertialOffer?.Installments?.[0] ||
    null;
  const priceVista =
    paymentOption?.TotalValuePlusInterestRate?.toFixed(2) ||
    "Preço não disponível";
  const installments = paymentOption?.NumberOfInstallments || 1;
  const priceParcelado =
    (paymentOption?.TotalValuePlusInterestRate / installments)?.toFixed(2) ||
    "Preço não disponível";

  const handleBuy = () => {
    alert(`Você comprou: ${product.productName}`);
  };

  return (
    <div className="product">
      <Link to={`/produto/${product.productId}`} className="product-link">
        <img
          src={imageUrl}
          alt={product.productName}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.src = "/no-image.jpg";
          }}
        />
      </Link>
      <Link to={`/produto/${product.productId}`} className="product-link">
        <h3 className="product-name">{product.productName}</h3>
      </Link>
      <p className="price-vista">R$ {priceVista}</p>
      <p>
        {installments}x de R$ {priceParcelado}
      </p>
      <button className="buy-button" onClick={handleBuy}>
        QUICK SHOP
      </button>
      <br />
      <br />
    </div>
  );
};

export default Product;

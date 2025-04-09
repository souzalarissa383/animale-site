import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import "./ProductList.scss";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadProducts = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`/products.json?page=${page}&limit=10`);
      if (Array.isArray(response.data)) {
        const uniqueProducts = response.data.filter(
          (product, index, self) =>
            index === self.findIndex((p) => p.productId === product.productId)
        );
        setProducts((prevProducts) => [...prevProducts, ...uniqueProducts]);
        setHasMore(response.data.length > 0);
      } else {
        throw new Error("Dados inválidos: esperado um array de produtos");
      }
    } catch (error) {
      console.error("Erro ao carregar os produtos:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) {
    return <div className="error">Erro: {error}</div>;
  }

  return (
    <div className="product-page">
      <div className="banner">
        <div className="banner-content">
          <h1>COURO</h1>
          <p>
            As peças de couro da ANIMALE são a interseção do clássico com
            inovação. Os shapes atemporais, detalhes únicos e variedade de
            materiais proporcionam um ajuste e acabamento que só quem tem um
            look couro sabe.
          </p>
          <div className="banner-links">
            <a href="#">VESTIDOS DE COURO</a>
            <a href="#">CALÇAS DE COURO</a>
            <a href="#">JAQUETAS DE COURO</a>
            <a href="#">COURO EM SALE</a>
          </div>
        </div>
      </div>

      <div className="product-filters">
        <span>FILTRAR POR ▼</span>
        <span>ORDENAR POR ▼</span>
      </div>

      <div className="product-list">
        {products.map((product, index) => (
          <Product key={`${product.productId}-${index}`} product={product} />
        ))}
      </div>

      {loading && <div className="loading">Carregando...</div>}

      {!loading && hasMore && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={handleLoadMore}>
            Carregar mais produtos
          </button>
        </div>
      )}

      {!hasMore && (
        <div className="no-more-products">Não há mais produtos.</div>
      )}
    </div>
  );
};

export default ProductList;

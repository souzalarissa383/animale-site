import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const location = useLocation();

  const isProductDetailsPage = location.pathname.startsWith("/produto/");
  const isProductListPage = location.pathname === "/colecao";

  const shouldRenderCarousel = !isProductDetailsPage && !isProductListPage;

  return (
    <div className="App">
      <Navbar />
      {shouldRenderCarousel && <Carousel />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colecao" element={<ProductList />} />
          <Route path="/produto/:productId" element={<DetailsProduct />} />
        </Routes>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Banner from '../components/Banner.jsx';
import Cart from '../components/Cart.jsx';
import Header from '../components/Header.jsx';
// import ImageSlider from '../components/ImageSlider.jsx';
import Product from '../components/ProductHero/Product.jsx';
import Modalbelow from '../components/Modalbelow.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <Cart />
      {/* <ImageSlider /> */}
      <Banner />
      <Product />
      <Modalbelow />
      <Footer />
    </div>
  );
};

export default Home;

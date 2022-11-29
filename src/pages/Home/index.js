import React from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Banner from './BannerHome';
import MiniBanners from './MiniBanners';

function index() {
  return (
    <div>
      <Header/>
      <Banner/>
      <MiniBanners/>
      <Footer/>
    </div>
  );
}

export default index;
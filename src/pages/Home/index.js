import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Banner from './BannerHome';
import MiniBanners from './MiniBanners';
import CenterBanners from './CenterBanners';
import TopBar from "../../Components/TopBar"
import Vitrine from "../../Components/Vitrine"
import Loading from "../../Components/Loading";
import Instafeed from "../../Components/Instafeed"

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vitrineUm, setVitrineUm] = useState(null);
  const [vitrineDois, setVitrineDois] = useState(null);
  const [loadingvitrineUm, setLoadingvitrineUm] = useState(true);
  const [loadingvitrineDois, setLoadingvitrineDois] = useState(true);
  const [errorvitrineUm, setErrorvitrineUm] = useState(null);
  const [errorvitrineDois, setErrorvitrineDois] = useState(null);

  useEffect(() => {
    fetch("./api/Category.json", {
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    }).then(data => {
      setData(data.items);
    }).catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    }).finally(() => {
      setLoading(false)
    })

    fetch("./api/Vitrine.json", {
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    }).then(vitrineUm => {
      setVitrineUm(vitrineUm);
    }).catch(errorvitrineUm => {
      console.error("Error fetching data: ", errorvitrineUm);
      setErrorvitrineUm(errorvitrineUm);
    }).finally(() => {
      setLoadingvitrineUm(false)
    })

    fetch("./api/Vitrine2.json", {
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    }).then(vitrineDois => {
      setVitrineDois(vitrineDois);
    }).catch(errorvitrineDois => {
      console.error("Error fetching data: ", errorvitrineDois);
      setErrorvitrineDois(errorvitrineDois);
    }).finally(() => {
      setLoadingvitrineDois(false)
    })
  }, [])

  console.log(data)
  
  return (
    <>
      <Header data={data} loading={loading} error={error} />
      <TopBar />
      <Banner />
      <MiniBanners text="UNA PRENDA PARA CADA OCASIÓN" />

      {errorvitrineUm === true ?
        <p> ERRO!</p>
        :
        !loadingvitrineUm === true ?
          <Vitrine data={vitrineUm} text="UNA PRENDA PARA CADA OCASIÓN" />
          :
          <Loading type="spinningBubbles" color="black" />
      }

      <CenterBanners text="UNA PRENDA PARA CADA OCASIÓN" />

      {errorvitrineDois === true ?
        <p> ERRO!</p>
        :
        !loadingvitrineDois === true ?
          <Vitrine data={vitrineDois} text="UNA PRENDA PARA CADA OCASIÓN" />
          :
          <Loading type="spinningBubbles" color="black" />
      }

      <Instafeed text="Redes Sociais" />
      <Footer />
    </>
  );
}

export default Home;

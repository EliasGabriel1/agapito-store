import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";
import Vitrine from "../../Components/Vitrine"
import Description from "../../Components/Product/Description"

function ProductPage(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vitrineUm, setVitrineUm] = useState(null);
  const [vitrineDois, setVitrineDois] = useState(null);
  const [loadingvitrineUm, setLoadingvitrineUm] = useState(true);
  const [loadingvitrineDois, setLoadingvitrineDois] = useState(true);
  const [errorvitrineUm, setErrorvitrineUm] = useState(null);
  const [errorvitrineDois, setErrorvitrineDois] = useState(null);
  const { addItemToCart } = useContext(AppContext);
  const { Product } = useContext(AppContext);
  console.log("tamo na pagina de produto ja po", Product)

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
      setData(data);
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

  const productItem = [
    {
      "productName": Product[0][0].productName,
      "productBrand": Product[0][0].productBrand,
      "productDescription": Product[0][0].productDescription,
      "imageProduct": Product[0][0].imageProduct,
      "flags": Product[0][0].flags,
      "ListPrice": Product[0][0].ListPrice,
      "Price": Product[0][0].Price,
      "installmentOptionsCount": Product[0][0].installmentOptionsCount,
      "installmentOptionsValue": Product[0][0].installmentOptionsValue
    }
  ]

  if (!errorvitrineUm && !errorvitrineDois) {

    return (
      <>
        <Header data={data} loading={loading} error={error} />

        {Product.length > 0 ?
          <>
            <div className="container">
              <div className="ProductContainer">
                <div className="ProductsImage">
                  <img width="100%" alt="" src={Product[0][0].imageProduct} />
                </div>
                <div className="ProductsDescript">
                  <p>{Product[0][0].productBrand}</p>
                  <h1>{Product[0][0].productName}</h1>
                  <p>{Product[0][0].Price}</p>
                  <p>{Product[0][0].ListPrice}</p>
                  <button onClick={() => addItemToCart(productItem)}>Adicionar ao carrinho</button>
                </div>
              </div>
              <div className="Description">
                <Description description={Product[0][0].productDescription} />
              </div>
            </div>
          </>
          : <Loading type="spinningBubbles" color="black" />
        }

        {!loadingvitrineUm === true ?
          <Vitrine data={vitrineUm} />
          : <Loading type="spinningBubbles" color="black" text="UNA PRENDA PARA CADA OCASIÓN" />}

        {!loadingvitrineDois === true ?
          <Vitrine data={vitrineDois} />
          : <Loading type="spinningBubbles" color="black" text="UNA PRENDA PARA CADA OCASIÓN" />}

      </>
    )
  }
  return <>ERRO!</>
}

export default ProductPage;

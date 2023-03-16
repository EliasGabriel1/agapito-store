import Header from "../../Components/Header";
import { useState, useEffect } from "react";
import Loading from "../../Components/Loading";
import Filter from "../../Components/Filter";
import Footer from "../../Components/Footer";

function Buscar() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./api/Colecao.json", {
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

  }, [])

  console.log(error)

  if (!error) {
      return (
        !loading === true ?
          <>
              <Header data={data}  loading={loading} error={error}/>
              <Filter data={data} loading={loading} error={error}/>
              <Footer />
          </>
        : <Loading type="spinningBubbles" color="black" />
      );
  }
  return <></>
}

export default Buscar;

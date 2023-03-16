import { useContext } from "react"
import { AppContext } from "../../Context/AppContext";

function Checkout() {
    const { cart } = useContext(AppContext);
    function CompraFeita(){
        document.querySelector(".checkout").innerHTML="<div> <h1> COMPRA FEITA </h1> </br> <a href='/'>voltar ao inicio </a></div>"
    }

    return (
        <div className="checkout">
            <ul>
                {
                    cart.length > 0 ?
                        cart.map((item, index) => (
                            <li key={index}>
                                <img alt="" width="100%" src={item[0].imageProduct} />
                                {item[0].productName} - R${item[0].Price}
                            </li>
                        )) :
                        <div className="carrinhovazio">O CHECKOUT ESTÁ VAZIO</div>
                }
            </ul>
            {cart.length > 0 ?<button onClick={() => CompraFeita()}> ENCERRAR COMPRA</button>:""}
        </div>
    );

}

export default Checkout;

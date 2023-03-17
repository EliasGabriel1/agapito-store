import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "./checkout.css";

function Checkout() {
    const { cart, clearCart } = useContext(AppContext);
    const [compraFeita, setCompraFeita] = useState(false);

    function handleCompraFeita() {
        clearCart();
        setCompraFeita(true);
    }

    return (
        <div className="checkout">
            {!compraFeita ? (
                <>
                    <ul>
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <li key={index}>
                                    <img alt="" width="100%" src={item[0].imageProduct} />
                                    {item[0].productName} - R${item[0].Price}
                                </li>
                            ))
                        ) : (
                            <div className="carrinhovazio">O CHECKOUT ESTÁ VAZIO</div>
                        )}
                    </ul>
                    {cart.length > 0 ? (
                        <button className="encerrar-compra-checkout" onClick={handleCompraFeita}>
                            ENCERRAR COMPRA
                        </button>
                    ) : null}
                </>
            ) : (
                <div>
                    <h1>COMPRA FEITA</h1>
                    <a href="/">voltar ao inicio</a>
                </div>
            )}
        </div>
    );
}

export default Checkout;

import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const Minicart = () => {
    const { cart } = useContext(AppContext);
    const { removeItemFromCart } = useContext(AppContext);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const navigate = useNavigate();

    const handleToggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handleRemoveItem = (itemId) => {
        console.log(itemId)
        removeItemFromCart(itemId);
    };

    const MiniCartSvg = () => {
        return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.729858 0C0.437671 0 0.214233 0.223437 0.214233 0.515625C0.214233 0.807813 0.437671 1.03125 0.729858 1.03125H1.93298V9.96875C1.93298 10.2609 2.15642 10.4844 2.44861 10.4844C2.7408 10.4844 2.96423 10.2609 2.96423 9.96875V2.75H17.9691C18.1925 2.75 18.3986 2.85299 18.5189 3.04205C18.6564 3.23112 18.6908 3.45482 18.6049 3.66107L16.2503 10.7422C15.9925 11.5156 15.2877 12.0312 14.4627 12.0312H3.65173C2.70642 12.0312 1.93298 12.8047 1.93298 13.75C1.93298 14.6953 2.70642 15.4688 3.65173 15.4688H11.8158C12.4345 15.4688 12.933 15.9672 12.933 16.5859C12.933 16.8781 13.1564 17.1016 13.4486 17.1016C13.7408 17.1016 13.9642 16.8781 13.9642 16.5859C13.9642 15.4 13.0017 14.4375 11.8158 14.4375H3.65173C3.27361 14.4375 2.96423 14.1281 2.96423 13.75C2.96423 13.3719 3.27361 13.0625 3.65173 13.0625H14.4627C15.7174 13.0625 16.8345 12.2548 17.2299 11.0688L19.5844 3.98737C19.7563 3.45455 19.6706 2.88737 19.3441 2.44049C19.0175 1.99362 18.5016 1.71875 17.9516 1.71875H2.96423V0.515625C2.96423 0.223437 2.7408 0 2.44861 0H0.729858ZM3.65173 16.5C2.70642 16.5 1.93298 17.2734 1.93298 18.2188C1.93298 19.1641 2.70642 19.9375 3.65173 19.9375C4.59705 19.9375 5.37048 19.1641 5.37048 18.2188C5.37048 17.2734 4.59705 16.5 3.65173 16.5ZM11.3968 16.8438C11.2658 16.8438 11.1369 16.8954 11.0424 16.9985C10.7158 17.3251 10.5439 17.7547 10.5439 18.2188C10.5439 19.1641 11.3173 19.9375 12.2626 19.9375C13.2079 19.9375 13.9814 19.1641 13.9814 18.2188C13.9814 17.9266 13.7579 17.7031 13.4657 17.7031C13.1735 17.7031 12.9501 17.9266 12.9501 18.2188C12.9501 18.5969 12.6407 18.9062 12.2626 18.9062C11.8845 18.9062 11.5751 18.5969 11.5751 18.2188C11.5751 18.0297 11.6441 17.8577 11.7816 17.7374C11.9534 17.5311 11.9532 17.2048 11.7641 16.9985C11.661 16.8954 11.5279 16.8438 11.3968 16.8438ZM3.65173 17.5312C4.02986 17.5312 4.33923 17.8406 4.33923 18.2188C4.33923 18.5969 4.02986 18.9062 3.65173 18.9062C3.27361 18.9062 2.96423 18.5969 2.96423 18.2188C2.96423 17.8406 3.27361 17.5312 3.65173 17.5312Z" fill="black" />
        </svg>)
    }


    const pageProduct = () => {
        const dataStr = JSON.stringify(cart);
        document.cookie = `data=${encodeURIComponent(dataStr)}; expires=${new Date(Date.now() + 86400000).toUTCString()}`;
        navigate("/checkout");
    }

    return (
        <div className="container-minicart">
            <button onClick={handleToggleCart}>
                <MiniCartSvg />
            </button>
            {isCartVisible && (
                <div className="mini-cart">
                    <h3>Meu Carrinho</h3>
                    <ul>
                        {
                            cart.length > 0 ?
                                cart.map((item, index) => (
                                    <li key={index}>
                                        <img alt="" width="100%" src={item[0].imageProduct} />
                                        {item[0].productName} - R${item[0].Price}
                                        <p className="cursor-pointer" onClick={() => handleRemoveItem(item[0].productId)}>remove</p>
                                    </li>
                                )) :
                                <div className="carrinhovazio">O CARRINHO ESTÁ VAZIO</div>
                        }
                        {cart.length > 0 ?<h5 className="encerrar-compra cursor-pointer" onClick={() => pageProduct()}>Encerrar compra</h5>:""}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Minicart;

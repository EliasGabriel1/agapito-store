import React, { useState } from "react";
export const AppContext = React.createContext();

function AppProvider(props) {
    const [state, setState] = useState({ items: [], user: null });

    const [cart, setCart] = useState([]);

    const [Product, setProduct] = useState([]);

    const addItemToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const IrAoItem = (item) => {
        setProduct((prevProduct) => [...prevProduct, item]);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    const NovoItem = () => {
        setProduct([]);
    };

    const removeItemFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item[0].productId !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const login = (user) => {
        setState((prevState) => ({ ...prevState, user }));
    };

    const logout = () => {
        setState((prevState) => ({ ...prevState, user: null }));
    };

    return (
        <AppContext.Provider
            value={{ state, addItemToCart, removeItemFromCart, login, logout, cart, setCart,setProduct,IrAoItem, Product,NovoItem,clearCart }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;

import React, { useState,useContext } from 'react';
import Loading from '../../../Loading';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../Context/AppContext";

function Researcher(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const { IrAoItem } = useContext(AppContext);
    const { NovoItem } = useContext(AppContext);
    const navigate = useNavigate();

    const filteredProducts = props.data?.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(props.error)

    function getProduct(product) {
        const clusterHighlights = product.clusterHighlights
        const productClusters = product.productClusters
        const result = Object.entries({ ...clusterHighlights, ...productClusters }).reduce((acc, [key, value]) => {
            if (!acc.hasOwnProperty(key)) {
                acc[key] = value;
            }
            return acc;
        }, {});
    
        const newFlag = Object.entries(result).map(([key, value]) => {
            return { id: key, label: value };
        });
        const productItem = [
            {
                "productId": product.productId,
                "productName": product.productName,
                "productBrand": product.brand,
                "productDescription": product.description,
                "imageProduct": product.items[0].images[0].imageUrl,
                "flags": newFlag,
                "ListPrice": product.items[0].sellers[0].commertialOffer.ListPrice,
                "Price": product.items[0].sellers[0].commertialOffer.Price,
                "installmentOptionsCount": product.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].count,
                "installmentOptionsValue": product.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].value
            }
        ]

        return productItem;
    }


    const pageProduct = (product) => {
        const  productItem= getProduct(product);
        console.log(productItem)
        NovoItem();
        IrAoItem(productItem);
        navigate("/Producto");
    }

    if (!props.error) {
        return (
            !props.loading === true ?
                <div className='searchBox'>
                    <div className='group-input'>
                        <input
                            type="text"
                            placeholder="¿QUÉ ESTÁS BUSCANDO?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="36" rx="18" fill="black" />
                            <path d="M29.9023 26.431L25.034 21.5627C26.0452 20.4399 26.6667 18.9597 26.6667 17.3333C26.6666 13.8412 23.8255 11 20.3333 11C16.8412 11 14 13.8412 14 17.3333C14 20.8255 16.8412 23.6667 20.3333 23.6667C21.9597 23.6667 23.4399 23.0452 24.5627 22.034L29.431 26.9023C29.4961 26.9674 29.5814 27 29.6667 27C29.752 27 29.8372 26.9674 29.9024 26.9023C30.0326 26.7721 30.0326 26.5612 29.9023 26.431ZM20.3333 23C17.209 23 14.6667 20.458 14.6667 17.3333C14.6667 14.2087 17.209 11.6667 20.3333 11.6667C23.4577 11.6667 26 14.2087 26 17.3333C26 20.458 23.4577 23 20.3333 23Z" fill="white" />
                        </svg>
                    </div>

                    <div className='answer-search' style={{ display: !searchTerm ? "none" : "" }}>
                        {filteredProducts.map((product) => (
                            <div key={product.productId} style={{ display: !searchTerm ? "none" : "" }}  onClick={() => pageProduct(product)}>
                                <img alt="" width="100%" src={product.items[0].images[0].imageUrl} />
                                <h4>{product.productName}</h4>
                                <p>{product.brand}</p>
                            </div>
                        ))}
                    </div>
                </div>
                : <Loading type="spinningBubbles" color="black" />
        );
    }
    return <></>
}

export default Researcher;

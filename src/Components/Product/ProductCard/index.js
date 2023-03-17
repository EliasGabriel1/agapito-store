import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";
import "./productCard.css";

function ProductCard(props) {
    const { addItemToCart } = useContext(AppContext);
    const { IrAoItem } = useContext(AppContext);
    const { NovoItem } = useContext(AppContext);

    const navigate = useNavigate();
 
    const item = props.item
    const clusterHighlights = props.item.clusterHighlights
    const productClusters = props.item.productClusters

    const result = Object.entries({ ...clusterHighlights, ...productClusters }).reduce((acc, [key, value]) => {
        if (!acc.hasOwnProperty(key)) {
            acc[key] = value;
        }
        return acc;
    }, {});

    const newFlag = Object.entries(result).map(([key, value]) => {
        return { id: key, label: value };
    });

    const productItem =[
        {
            "productId": item.productId,
            "productName": item.productName,
            "productBrand": item.brand,
            "productDescription": item.description,
            "imageProduct": item.items[0].images[0].imageUrl,
            "flags": newFlag,
            "ListPrice": item.items[0].sellers[0].commertialOffer.ListPrice,
            "Price": item.items[0].sellers[0].commertialOffer.Price,
            "installmentOptionsCount": item.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].count,
            "installmentOptionsValue": item.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].value
        }
    ]

    const pageProduct = ()=>{
        NovoItem()
        IrAoItem(productItem)
        navigate("/Producto");
    }

    return (
        <li className="item-product">

            <div className="Card box-item">

                <div className="Card__link">
                    <span className="Card__flags">
                        {newFlag.map((flag,i) => {
                            return (<p className={`flag ${flag.id}`} key={i+1}>{flag.label}</p>)
                        })}
                    </span>

                    <span className="Card__product-image" onClick={pageProduct}>
                        <img src={item.items[0].images[0].imageUrl}
                            width="100%" alt={item.items[0].images[0].label} />
                    </span>

                </div>

                <div className="Card__product-info">

                    <div className="Card__product-info-link Card__link" onClick={pageProduct}>
                        <span className="Card__product-brand">
                            {item.brand}
                        </span>

                        <span className="Card__product-name">
                            {item.productName}
                        </span>

                    </div>

                    <div className="Card__product-price">


                        <span className="Card__product-list-price">{item.items[0].sellers[0].commertialOffer.ListPrice}</span>
                        <span className="Card__product-best-price">
                            <strong>{item.items[0].sellers[0].commertialOffer.Price}</strong>
                        </span>

                        <span className="Card__installment">
                            {item.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].count} cuotas de <span className="nowrap">$ {item.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].value}</span>
                        </span>

                    </div>

                </div>

                <div className="Card__comprar">
                    <button onClick={() => addItemToCart(productItem)}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.50001 3H3.50001M8.50001 3H9.15437C10.1972 3 10.7186 3 11.0168 3.33308C11.3149 3.66616 11.2573 4.18439 11.1421 5.22086L10.9942 6.55216C10.7591 8.66781 10.6416 9.72564 9.92971 10.3628C9.21781 11 8.14521 11 6.00001 11C3.85481 11 2.78221 11 2.07031 10.3628C1.35842 9.72564 1.24088 8.66781 1.00581 6.55216L0.857884 5.22086C0.742721 4.18439 0.685139 3.66616 0.983259 3.33308C1.28138 3 1.8028 3 2.84565 3H3.50001M8.50001 3C8.50001 1.61929 7.38072 0.5 6.00001 0.5C4.65339 0.5 3.55545 1.56469 3.50205 2.89821C3.50069 2.93197 3.50001 2.96591 3.50001 3"
                                stroke="black"></path>
                            <path
                                d="M9 5C9 5.27614 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.27614 8 5C8 4.72386 8.22386 4.5 8.5 4.5C8.77614 4.5 9 4.72386 9 5Z"
                                fill="black"></path>
                            <path
                                d="M4 5C4 5.27614 3.77614 5.5 3.5 5.5C3.22386 5.5 3 5.27614 3 5C3 4.72386 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.72386 4 5Z"
                                fill="black"></path>
                        </svg>
                        Adicionar ao carrinho</button>
                </div>
            </div>
        </li>
    )
}

export default ProductCard
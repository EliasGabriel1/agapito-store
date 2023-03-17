import ProductCard from "../Product/ProductCard";
import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import "./vitrine.css"

function Vitrine(props) {

    const [currentProducts, setCurrentProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const window = useWindowSize();

    const productsPerPage = window.width > 900 ? 5 : 2;

    const handleNext = () => {
        const lastIndex = props.data.length - productsPerPage;
        currentIndex === lastIndex
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + productsPerPage);
    };

    const handlePrev = () => {
        const lastIndex = props.data.length - productsPerPage;
        currentIndex === 0
            ? setCurrentIndex(lastIndex)
            : setCurrentIndex(currentIndex - productsPerPage);
    };

    useEffect(() => {
        setCurrentProducts(props.data.slice(currentIndex, currentIndex + productsPerPage));
    }, [currentIndex, props.data, productsPerPage]);


    return (
        <>
            <div className="container product-carousel-container vitrine">
                {props.text ? <h3>{props.text}</h3> : ""}
                <div className="product-carousel-slide list-products">
                    {currentProducts.map((item) => (
                        <ProductCard key={item.productId} text="vitrine" item={item} />
                    ))}
                </div>
                <button className="handlePrev" onClick={handlePrev}>
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.146484 7.6465L7.64648 0.146495C7.84181 -0.0488335 8.15822 -0.0488334 8.3535 0.146495C8.54883 0.341823 8.54883 0.658229 8.3535 0.853511L1.707 7.50001L23.5 7.50002C23.7764 7.50002 24 7.72366 24 8.00003C24 8.27641 23.7764 8.50005 23.5 8.50005L1.707 8.50005L8.3535 15.1465C8.54883 15.3418 8.54883 15.6582 8.3535 15.8535C8.25586 15.9512 8.12789 16 7.99997 16C7.87204 16 7.74412 15.9512 7.64644 15.8535L0.146436 8.35351C-0.0488448 8.15823 -0.0488444 7.84183 0.146484 7.6465Z" fill="black" />
                    </svg>
                </button>
                <button className="handleNext" onClick={handleNext}>
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.8535 7.6465L16.3535 0.146495C16.1582 -0.0488335 15.8418 -0.0488334 15.6465 0.146495C15.4512 0.341823 15.4512 0.658229 15.6465 0.853511L22.293 7.50001L0.500016 7.50002C0.223641 7.50002 6.75224e-07 7.72366 6.99385e-07 8.00003C7.23546e-07 8.27641 0.223641 8.50005 0.500016 8.50005L22.293 8.50005L15.6465 15.1465C15.4512 15.3418 15.4512 15.6582 15.6465 15.8535C15.7441 15.9512 15.8721 16 16 16C16.128 16 16.2559 15.9512 16.3536 15.8535L23.8536 8.35351C24.0488 8.15823 24.0488 7.84183 23.8535 7.6465Z" fill="black" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Vitrine;

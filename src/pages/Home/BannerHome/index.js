import React, { useState } from "react";
import { useWindowSize } from "../../../Hooks/useWindowSize";

function Banner() {
    const window = useWindowSize();
    const imagesdesktop = [
        "https://i.postimg.cc/tTZ4bM9H/image-38.png",
        "https://i.postimg.cc/8s819YtT/Group-1254.png"
    ];

    const imagesmobile = [
        "https://i.postimg.cc/RZyzGr6b/image-38.png",
        "https://i.postimg.cc/RZyzGr6b/image-38.png"
    ];

    const images = window.width > 900 ? imagesdesktop : imagesmobile;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const previousImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div className="container-banner">
            <div className="carousel-container">
                {images.map((image, index) => (
                    <div key={index} style={{ display: currentImageIndex === index ? 'block' : 'none' }}>
                        <img
                            alt=""
                            src={image}
                            width="100%"
                            className="carousel-image"
                        />
                    </div>
                ))}
            </div>
            <div className="carousel-buttons">
                <button onClick={previousImage} className="button-previous">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.8" x="44" y="44" width="44" height="44" rx="22" transform="rotate(-180 44 44)" fill="white" />
                        <path d="M10.1465 21.6465L17.6465 14.1465C17.8418 13.9512 18.1582 13.9512 18.3535 14.1465C18.5488 14.3418 18.5488 14.6582 18.3535 14.8535L11.707 21.5L33.5 21.5C33.7764 21.5 34 21.7237 34 22C34 22.2764 33.7764 22.5 33.5 22.5L11.707 22.5L18.3535 29.1465C18.5488 29.3418 18.5488 29.6582 18.3535 29.8535C18.2559 29.9512 18.1279 30 18 30C17.872 30 17.7441 29.9512 17.6464 29.8535L10.1464 22.3535C9.95116 22.1582 9.95116 21.8418 10.1465 21.6465Z" fill="black" />
                    </svg>
                </button>
                <button onClick={nextImage} className="button-next">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.8" width="44" height="44" rx="22" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 44)" fill="white" />
                        <path d="M33.8535 21.6465L26.3535 14.1465C26.1582 13.9512 25.8418 13.9512 25.6465 14.1465C25.4512 14.3418 25.4512 14.6582 25.6465 14.8535L32.293 21.5L10.5 21.5C10.2236 21.5 10 21.7237 10 22C10 22.2764 10.2236 22.5 10.5 22.5L32.293 22.5L25.6465 29.1465C25.4512 29.3418 25.4512 29.6582 25.6465 29.8535C25.7441 29.9512 25.8721 30 26 30C26.128 30 26.2559 29.9512 26.3536 29.8535L33.8536 22.3535C34.0488 22.1582 34.0488 21.8418 33.8535 21.6465Z" fill="black" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Banner;

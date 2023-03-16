import React, { useState } from 'react';
import Loading from '../../../Loading';

function Researcher(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = props.data?.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(props.error)

    if (!props.error) {
        return (
            !props.loading === true ?
                <div className='searchBox'>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className='answer-search'>
                        {filteredProducts.map((product) => (
                            <div key={product.productId} style={{ display: !searchTerm ? "none" : "" }}>
                                <h4>{product.productName}</h4>
                                <h5>{product.image}</h5>
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

import React, { useState } from 'react';

const Filter = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = props.data.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        {filteredProducts.map((product) => (
          <div key={product.productId}>
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
};

export default Filter;

import { useState } from 'react';
import ProductCard from "../Product/ProductCard";
import "./filter.css";

const Filter = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = props.data.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <div className='d-grid'>
        <div className='filter'>
          {
            <div>
              <input
                type="checkbox"
                className='checkbox'
                id="todos"
                name="todos"
                value=""
                onChange={(e) => setSearchTerm(e.target.value ?? "")} />
              <label htmlFor="todos">Todos Produtos</ label>
            </ div>
          }
          {
            props.data.map((item) => {
              return (
                <div key={item.productId}>
                  <input
                    type="checkbox"
                    className='checkbox'
                    id={item.productId}
                    name={item.productId}
                    value={item.productName.substr(0, 12)}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                  <label htmlFor={item.productId}>{item.productName}</ label>
                </ div>
              )
            })
          }
        </div>

        <div className='d-flex wrap'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.productId} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};



export default Filter;
import React, { useState, useEffect } from 'react';
// import { Container, Card } from 'reactstrap';
import { productService } from '../../services';

import {} from './style.css';

const Product = () => {
  const [productItem, setProduct] = useState([]);
  const [isProductLoading, setProductLoading] = useState(false);

  useEffect(() => {
    setProductLoading(true);
    productService
      .product()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductLoading(false);
      });
  }, []);

  const listProduct = productItem.map((data) => {
    return (
      <div className="container">
        <div className="product">
          <div className="product-img">
            <img src={data.variants[0].images[0].product_url} alt="..." />
          </div>
          <div className="product-detail">
            <p>{data.name}</p>
            <p className="product-price">
              Harga:
              {data.display_price}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return <div>{isProductLoading ? <p>Loading</p> : listProduct}</div>;
};

export default Product;

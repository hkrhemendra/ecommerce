import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import SingleProduct from "./SingleProduct";

const Products = ({ limit }) => {
  const [products, setProducts] = useState([]);

  limit = limit || 9;
  const allProducts = (limit) => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    allProducts(limit);
  }, []);

  return (
    <div className="container my-5">
      <SectionTitle
        title="All Products"
        description="This is a longer card with supporting text below as a natural lead-in to additional content."
      />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.length ? (
          products.map((ele) => (
            <SingleProduct id={ele.id} image={ele.image} title={ele.title} description={ele.description} key={ele.id} />
          ))
        ) : (
          <div> No products found </div>
        )}
      </div>
    </div>
  );
};

export default Products;

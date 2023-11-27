import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const getFeaturedProducts = () => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => setFeaturedProducts(json));
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  return (
    <div className="container my-5">
      <SectionTitle
        title="Featured Products"
        description="Quickly design and customize responsive mobile-first sites with Bootstrap"
      />

      <div className="card-group">
        {featuredProducts.length ? (
          featuredProducts.map((ele) => (
            <div className="card">
              <img src={ele.image} className="card-img-top p-4 " alt="..." />
              <hr className="mx-3" />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">
                  {ele.description.split(' ').splice(0, 20).join(' ')}...
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>No products to show</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

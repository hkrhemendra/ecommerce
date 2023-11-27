import React from "react";
import { Link } from "react-router-dom";


const SingleProduct = ({id, image, title, description }) => {
  return (
    <div>
      <Link to={`/shop/${id}`} >
      <div className="col">
        <div className="card">
          <img src={image} className="card-img-top p-5" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description.split(" ").splice(0, 20).join(" ")}
            </p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default SingleProduct;

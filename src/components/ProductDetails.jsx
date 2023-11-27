import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slice/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartSlice);

  console.log('Product Details -------> ', cartItems)

  const hanldeAddToCart = ({ id, title, price, category }) => {
    dispatch(addToCart({ id, title, price, category }));
  };

  const handleRemoveFromCart = ({id}) => {
    dispatch(removeFromCart({id}))
  }

  const getProductDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useState(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <center>
            <img src={product?.image} className="w-50 py-5" alt="......" />
          </center>
        </div>
        <div className="col-md my-5">
          <div className="d-flex flex-col">
            <h3> {product?.title} </h3>
          </div>
          <div className="lead text-sm my-5">
            <p>{product?.description}</p>
          </div>
          <h5 className="my-3"> Category: {product?.category} </h5>
          <h3> Price: {product?.price} </h3>
          <div className="btn-group d-flex gap-3 my-5">
            <Link className="btn btn-primary" to={"/checkout"}>
              {" "}
              Buy Now{" "}
            </Link>
            {cartItems?.productList[id] ? (
              <div className="d-flex gap-2 align-items-center flex-fill justify-content-between">
                <button className="btn btn-outline-danger flex-fill" onClick={() => handleRemoveFromCart({id: product?.id})} >
                  {" "}
                  <i class="ri-subtract-fill"></i>{" "}
                </button>
                <center>
                  <h6 className="flex-fill px-2 fs-4"> {cartItems?.productList[product.id].quantity} </h6>
                </center>
                <button onClick={() => hanldeAddToCart({
                    id: product?.id,
                    title: product?.title,
                    price: product?.price,
                    category: product?.category,
                  })} className="btn btn-outline-primary flex-fill">
                  {" "}
                  <i class="ri-add-fill"></i>{" "}
                </button>
              </div>
            ) : (
              <button
                className="btn btn-outline-primary"
                onClick={() =>
                  hanldeAddToCart({
                    id: product?.id,
                    title: product?.title,
                    price: product?.price,
                    category: product?.category,
                  })
                }
              >
                {" "}
                Add to Cart{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

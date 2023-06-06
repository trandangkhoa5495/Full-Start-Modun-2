import React from "react";
import "./Cartproduct.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducer/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cartproduct = (props) => {
  const product = props.product;

  const dispatch = useDispatch();

  function handleClick(product) {
    dispatch(addToCart(product));
    const functionThatReturnPromise = () =>
      new Promise((resolve) => setTimeout(resolve, 3000));
    toast.promise(functionThatReturnPromise, {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
  }

  return (
    <>
      <div className="cardcomponent1">
        <img src={product.img} />
        <div className="cardcomponent3">
          <p>
            <b>$ {product.price.toLocaleString("en-GB")} </b>
          </p>
          <p>{product.product}</p>
        </div>
        <button className="btncard" onClick={() => handleClick(product)}>
          <i
            className="fa-regular fa-square-plus"
            style={{ color: "#000000" }}
          />
        </button>
      </div>
    </>
  );
};

export default Cartproduct;

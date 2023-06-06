import React, { useEffect, useState } from "react";
import Cartproduct from "../cartproduct/Cartproduct";
import "./Lishproduct.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const ListProduct = () => {
  const productLish = useSelector((state) => state.Product);
  return (
    <div className="cardcomponent">
      {productLish.map((product) => (
        <Cartproduct product={product} />
      ))}

      {<ToastContainer />}
    </div>
  );
};

export default ListProduct;

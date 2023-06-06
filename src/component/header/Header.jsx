import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HeaderCom = () => {
  const total = useSelector((state) => state.cart);
  const [value, setvalue] = useState({});
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(value);
  };

  const getvalue = (e) => {
    setvalue(...value);
  };
  return (
    <div className="header">
      <h1>
        <b>Rikkei Medicine</b>
      </h1>
      <div className="header1">
        <button id="btnheader" onClick={() => handleSearch()}>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#000000" }}
          ></i>
        </button>

        <input
          type="text"
          id="inputsearch"
          placeholder=" Search..."
          onChange={(e) => getvalue(e.target.value)}
        />
      </div>

      <div className="header2">
        <Link id="btnheader" to="/cart">
          <i className="fa-solid fa-cart-shopping" style={{ color: "#000000" }}>
            <span id="span">{total.length}</span>
          </i>
        </Link>
        <img src="https://batterydown.vn/wp-content/uploads/2022/05/hinh-anh-avatar-de-thuong-750x600.jpg" />
      </div>
    </div>
  );
};

export default HeaderCom;

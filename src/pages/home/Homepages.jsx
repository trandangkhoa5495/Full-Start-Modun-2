import React from "react";
import ListProduct from "../../component/listproduct/ListProduct";
import Sliceder from "../../component/slice/Sliceder";
import { useDispatch } from "react-redux";
import { handleCallAPIproduct } from "../../redux/reducer/productSlice";

const Homepages = () => {
  // getAllProduct nó sẽ dispatch 1 action bất đồng bộ
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    const products = handleCallAPIproduct();
    await dispatch(products).unwrap();
  };
  getAllProduct();
  return (
    <div>
      <Sliceder />
      <ListProduct />
    </div>
  );
};

export default Homepages;

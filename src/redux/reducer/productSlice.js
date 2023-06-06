import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductAPI from "../../API/Product";
// phục vụ cho việc call API vất đồng bộ để lưu data lên redux
// createAsyncThunk sẽ nhận 2 tham số,thứ 1 là chuỗi nên đặt theo cách API
// nó dc hiểu là 1 action
export const handleCallAPIproduct = createAsyncThunk(
  "product/fetAllProduct",
  async (action) => {
    // call API
    // thay vì call ở componet thì call trực tiếp tại redux
    const response = await ProductAPI.getAllProduct();
    const data = response.data;
    // lưu vào localstoreage
    localStorage.setItem("carts", JSON.stringify(data));
    // trả về payload
    return data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: JSON.parse(localStorage.getItem("productLish")) || [],
  // extrareducers nó thao tác bất đồng bộ
  extraReducers: {
    //  [handleCallAPIproduct.fulfilled]==product/fetAllProduct
    [handleCallAPIproduct.fulfilled]: (state, action) => {
      // state của hệ thống redux
      // action chính là kết quả trả về của hàm handleCallAPIproduc
      return (state = action.payload);
    },
  },
});
const { actions, reducer } = productSlice;
export default reducer;

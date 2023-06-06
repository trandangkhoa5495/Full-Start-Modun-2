import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("productLish")) || [],
  // reducers chỉ thao tác đồng bộ
  reducers: {
    addToCart: (state, action) => {
      const addcart = state.find((cart) => cart.id === action.payload.id);
      const newstate = addcart
        ? state.map((item) => {
            if (item.id === addcart.id) {
              item.quantity += 1;
            }
            return item;
          })
        : state.push({
            ...action.payload,
            quantity: action.payload.quantity + 1,
          });
    },
    handlePlus: (state, action) => {
      const newstate = state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
        return item;
      });
    },
    handleMinus: (state, action) => {
      const newstate = state.map((item) => {
        if (item.id === action.payload.id && item.quantity > 0) {
          item.quantity -= 1;
        }
        return item;
      });
    },
    deleteProduct: (state, action) => {
      const remove = state.filter((item) => item.id !== action.payload);
      return remove;
    },
  },
});

const { actions, reducer } = CartSlice;
export const { addToCart, handleMinus, handlePlus, deleteProduct } = actions;
export default reducer;

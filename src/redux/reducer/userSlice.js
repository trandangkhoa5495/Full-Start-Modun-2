import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../../API/user";
// đây là action bất đồng bộ
export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    // call API để đăng ký tài khoản
    const response = await UserAPI.register(payload);
    console.log(response);

    const data = response.data;
    // lưu user
    localStorage.setItem("user", JSON.stringify(data.user));
    // lưu access token
    localStorage.setItem("accesstoken", JSON.stringify(data.accessToken));
    return data;
  }
);

// bất đồng bộ
export const login = createAsyncThunk("login/fetchAuth", async (payload) => {
  try {
    const response = await UserAPI.login(payload);
    console.log(response);
    const user = response.data;
    user && localStorage.setItem("user", JSON.stringify(user.user));
    user &&
      localStorage.setItem("accesstoken", JSON.stringify(user.accessToken));
  } catch (error) {
    console.log(error);
  }
});
const UserSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("user")) || {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
    [login.fulfilled]: (state, action) => {
      state = action.payload.user;
      return state;
    },
  },
});
const { actions, reducer } = UserSlice;
export default reducer;

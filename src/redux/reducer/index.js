import reducer1 from "./CartSlice";
import reducer2 from "./productSlice";
import reducer from "./userSlice";

const rootReducer = { cart: reducer1, Product: reducer2, user: reducer };
export default rootReducer;

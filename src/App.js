import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepages from "./pages/home/Homepages";
import CartPage from "./pages/cart/Cartpages";
import HeaderCom from "./component/header/Header";
import Auth from "./pages/auth/auth";
import Singin from "./component/singin/singin";
import Singup from "./component/singup/singup";

function App() {
  return (
    <div className="App">
      <HeaderCom />
      <Routes>
        <Route path="/" index element={<Homepages />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="signin" element={<Singin />} />
          <Route path="signup" element={<Singup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

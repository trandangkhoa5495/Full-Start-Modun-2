import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import "./cartpages.css";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import {
  deleteProduct,
  handleMinus,
  handlePlus,
} from "../../redux/reducer/CartSlice";

function CartPage() {
  const dispatch = useDispatch();

  const lishproduct = useSelector((state) => state.cart);

  const handledelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleplus = (item) => {
    dispatch(handlePlus(item));
  };
  const handleminus = (item) => {
    dispatch(handleMinus(item));
  };
  const totalMoney = useMemo(() => {
    const total = lishproduct.reduce(
      (pre, curr) => pre + curr.quantity * curr.price,
      0
    );
    return total;
  }, [lishproduct]);

  return (
    <div className="cart-page">
      <Container fluid className="py-4">
        <div>
          <Table responsive="lg" className="table-cart">
            <thead>
              <tr>
                <th>#</th>
                <th>Hình ảnh sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {lishproduct.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.img} alt="Ảnh sản phẩm" />
                  </td>
                  <td>{item.product}</td>
                  <td className="text-danger">{item.price}</td>
                  <td>
                    <button
                      className="btn btn-minus"
                      onClick={() => handleminus(item)}
                    >
                      -
                    </button>
                    <span className="mx-3 bg-white">{item.quantity}</span>
                    <button
                      className="btn btn-plus"
                      onClick={() => handleplus(item)}
                    >
                      +
                    </button>
                  </td>
                  <td className="fw-bold ">
                    {(item.price * item.quantity).toLocaleString("en-GB")}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handledelete(item.id)}
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="total-money">
          <b>Tổng tiền: </b>
          <span className="money fw-bold text-danger">
            {totalMoney.toLocaleString("en-GB")}
          </span>
        </div>
        <NavLink to="/checkout">
          <button className="btn btn-success mt-3">Thanh toán</button>
        </NavLink>
        <br />
        <NavLink to="/">Tiếp tục mua sắm</NavLink>
      </Container>
    </div>
  );
}
export default CartPage;

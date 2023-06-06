import axiosClient from "./AxiosClient";

class ProductAPI {
  // lấy tất cả
  static getAllProduct() {
    const url = "/productLish";
    return axiosClient.get(url);
  }

  // lấy 1 cái:
  static getProductById(id) {
    const url = `/productLish/${id}`;
    return axiosClient.get(url, {});
  }
  // tạo mới
  static addProduct(params) {
    const url = "/productLish";
    return axiosClient.post(url, params);
  }
  //   static createProduct(params) {}
  // static editProduct(id) {}
  // static deleteProduct(id) {}
}
export default ProductAPI;

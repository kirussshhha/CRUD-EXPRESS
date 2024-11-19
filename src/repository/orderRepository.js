import OrderModel from "../models/orderModel.js";

const orderRepository = {
  getAll: async () => {
    return await OrderModel.find();
  },
  create: async (data) => {
    return await OrderModel.create(data);
  },
};

export default orderRepository;

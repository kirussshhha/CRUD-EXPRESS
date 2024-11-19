import OrderModel from "../models/orderModel.js";

const orderRepository = {
  getAll: async () => {
    return await OrderModel.find();
  },
  create: async (data) => {
    return await OrderModel.create(data);
  },
  getById: async (id) => {
    return await OrderModel.findById(id);
  },
  updateStatusById: async (id, status) => {
    return await OrderModel.findByIdAndUpdate(id, { status }, { new: true });
  },
  deleteById: async (id) => {
    return await OrderModel.findByIdAndDelete(id);
  },
};

export default orderRepository;

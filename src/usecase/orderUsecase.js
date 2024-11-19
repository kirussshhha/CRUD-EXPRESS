import orderRepository from "../repository/orderRepository.js";

const orderUsecase = {
  listAllOrder: async () => {
    return await orderRepository.getAll();
  },
  createOrder: async (data) => {
    return await orderRepository.create(data);
  },
};

export default orderUsecase;

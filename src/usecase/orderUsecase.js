import orderRepository from "../repository/orderRepository.js";

const orderUsecase = {
  listAllOrder: async () => {
    return await orderRepository.getAll();
  },
  createOrder: async (data) => {
    return await orderRepository.create(data);
  },
  checkStatus: async (id) => {
    const order = await orderRepository.getById(id);
    if (!order) {
      throw new Error("Заказ не найден");
    }
    return order;
  },
};

export default orderUsecase;

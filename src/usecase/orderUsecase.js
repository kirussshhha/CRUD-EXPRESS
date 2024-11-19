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
  updateOrder: async (id, status) => {
    const updatedOrder = await orderRepository.updateStatusById(id, status);
    if (!updatedOrder) {
      throw new Error("Заказ не найден");
    }
    return updatedOrder;
  },
  deleteOrder: async (id) => {
    const deleteOrder = await orderRepository.deleteById(id);
    if (!deleteOrder) {
      throw new Error("Заказ не найден");
    }
    return deleteOrder;
  },
};

export default orderUsecase;

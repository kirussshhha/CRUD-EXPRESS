import orderUsecase from "../../usecase/orderUsecase.js";

const getOrders = async (req, res) => {
  try {
    const orders = await orderUsecase.listAllOrder();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const newOrders = await orderUsecase.createOrder(req.body);
    res.status(200).json(newOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderUsecase.checkStatus(id);
    if (!order) {
      return res.status(404).json({ error: "Заказ не найден" });
    }
    res.status(200).json({ status: order.status });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getOrders, createOrder, getStatus };

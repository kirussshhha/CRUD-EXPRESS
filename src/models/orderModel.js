import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        type: String,
        required: true,
      },
    ],
    customerName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["создан", "в пути", "доставлено"],
      default: "создан",
    },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;

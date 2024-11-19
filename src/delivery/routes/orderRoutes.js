import express from "express";
import { createOrder, getOrders, getStatus } from "../controllers/orderController.js";
import validateRequest from "../validation/validateRequest.js";
import orderSchema from "../validation/schemas/orderSchema.js";

const router = express.Router();

router.get("/list", getOrders);
router.post("/create", validateRequest(orderSchema), createOrder);
router.get("/checkStatus/:id", getStatus);

export default router;

import express from "express";
import {
  getCarBrands,
  createCarBrand,
} from "../controllers/carBrandController.js";

const router = express.Router();

router.get("/list", getCarBrands);

router.post("/create", createCarBrand);

export default router;

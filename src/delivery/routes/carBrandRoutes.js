import express from "express";
import carBrandUsecase from "../../usecase/carBrandUsecase.js";

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const carBrands = await carBrandUsecase.listAllCarBrands();
    res.status(200).json(carBrands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newCarBrand = await carBrandUsecase.createCarBrand(req.body);
    res.status(201).json(newCarBrand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
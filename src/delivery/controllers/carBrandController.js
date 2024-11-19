import carBrandUsecase from "../../usecase/carBrandUsecase.js";

const getCarBrands = async (req, res) => {
  try {
    const carBrands = await carBrandUsecase.listAllCarBrands();
    res.status(200).json(carBrands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCarBrand = async (req, res) => {
  try {
    const newCarBrand = await carBrandUsecase.createCarBrand(req.body);
    res.status(200).json(newCarBrand);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getCarBrands, createCarBrand };

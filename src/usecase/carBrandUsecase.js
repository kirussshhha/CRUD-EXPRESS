import carBrandRepository from "../repository/carBrandRepository.js";

const carBrandUsecase = {
  listAllCarBrands: async () => {
    return await carBrandRepository.getAll();
  },
  createCarBrand: async (data) => {
    return await carBrandRepository.create(data);
  },
};

export default carBrandUsecase;
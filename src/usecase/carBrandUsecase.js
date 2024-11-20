import carBrandRepository from "../repository/carBrandRepository.js";

const carBrandUsecase = {
  listAllCarBrands: async (query) => {
    return await carBrandRepository.getAll(query);
  },
  createCarBrand: async (data) => {
    return await carBrandRepository.create(data);
  },
};

export default carBrandUsecase;
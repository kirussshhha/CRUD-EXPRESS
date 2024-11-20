import carBrandRepository from "../repository/carBrandRepository.js";

const carBrandUsecase = {
  listAllCarBrands: async (query) => {
    return await carBrandRepository.getAll(query);
  },
  createCarBrand: async (data) => {
    return await carBrandRepository.create(data);
  },
  getCarBrand: async (id) => {
    return await carBrandRepository.getById(id);
  },
  updateCarBrand: async (id, data) => {
    return await carBrandRepository.updateById(id, data);
  },
};

export default carBrandUsecase;

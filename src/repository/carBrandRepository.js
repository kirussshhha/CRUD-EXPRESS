import CarBrandModel from "../models/carBrandModel.js";

const carBrandRepository = {
  getAll: async () => {
    return await CarBrandModel.find();
  },
  create: async (data) => {
    return await CarBrandModel.create(data);
  },
};

export default carBrandRepository;
import CarBrandModel from "../models/carBrandModel.js";

const carBrandRepository = {
  getAll: async (query) => {
    return await CarBrandModel.find(query);
  },
  create: async (data) => {
    return await CarBrandModel.create(data);
  },
  getById: async (id) => {
    return await CarBrandModel.findById(id);
  },
};

export default carBrandRepository;

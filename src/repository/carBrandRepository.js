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
  updateById: async (id, data) => {
    return await CarBrandModel.findByIdAndUpdate(id, data, { new: true });
  },
  deleteById: async (id) => {
    return await CarBrandModel.findByIdAndDelete(id);
  },
};

export default carBrandRepository;

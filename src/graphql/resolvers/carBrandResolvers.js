import carBrandUsecase from "../../usecase/carBrandUsecase.js";

export const resolvers = {
  Query: {
    carBrands: async () => {
      return await carBrandUsecase.listAllCarBrands();
    },
  },
};

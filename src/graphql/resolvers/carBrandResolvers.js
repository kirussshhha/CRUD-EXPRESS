import carBrandUsecase from "../../usecase/carBrandUsecase.js";

export const resolvers = {
  Query: {
    carBrands: async (_, { filterName, sortByName }) => {
      let query = {};

      if (filterName) {
        query.brandName = { $regex: filterName, $options: "i" };
      }

      let results = await carBrandUsecase.listAllCarBrands(query);

      if (sortByName) {
        results = results.sort((a, b) => {
          if (sortByName === "asc") {
            return a.brandName.localeCompare(b.brandName);
          } else if (sortByName === "desc") {
            return b.brandName.localeCompare(a.brandName);
          }
          return 0;
        });
      }

      return results;
    },
    carBrand: async (_, { id }) => {
      return await carBrandUsecase.getCarBrand(id);
    },
    soldCars: async (_, { model }) => {
      const query = { model };

      const results = await carBrandUsecase.listAllCarBrands(query);

      if (results.length > 0) {
        return results.reduce((total, car) => total + (car.purchases || 0), 0);
      }

      return 0;
    },
  },
  Mutation: {
    createCarBrand: async (_, data) => {
      return await carBrandUsecase.createCarBrand(data);
    },
    updateCarBrand: async (_, data) => {
      const { id, ...otherData } = data;
      return await carBrandUsecase.updateCarBrand(id, otherData);
    },
    deleteCarBrand: async (_, { id }) => {
      return await carBrandUsecase.deleteCarBrand(id);
    },
  },
};

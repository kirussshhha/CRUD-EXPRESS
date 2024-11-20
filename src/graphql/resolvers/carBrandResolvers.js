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
  },
};

import gql from "graphql-tag";

export const typeDefs = gql`
  type CarBrand {
    id: ID!
    brandName: String!
    model: String!
    fuelType: String!
    bodyType: String!
    purchases: Int
  }

  type Query {
    carBrands(filterName: String, sortByName: String): [CarBrand]
    carBrand(id: ID!): CarBrand
    soldCars(model: String!): Int
  }

  type Mutation {
    createCarBrand(
      brandName: String!
      model: String!
      fuelType: String!
      bodyType: String!
      purchases: Int
    ): CarBrand

    updateCarBrand(
      id: ID!
      brandName: String!
      model: String!
      fuelType: String!
      bodyType: String!
      purchases: Int
    ): CarBrand

    deleteCarBrand(id: ID!): CarBrand
  }
`;

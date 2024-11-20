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
    carBrands: [CarBrand]
  }
`;

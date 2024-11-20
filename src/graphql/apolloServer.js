import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schemas/carbrandschema.js";
import { resolvers } from "./resolvers/carBrandResolvers.js";

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

export default apolloServer;
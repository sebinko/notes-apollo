import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/notes", {
    useNewUrlParser: true,
  });

  app.listen({ port: 8080 }, () =>
    console.log(`Server started at http://localhost:8080${server.graphqlPath}`)
  );
};

startServer();

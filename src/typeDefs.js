import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Note {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
  }

  type Query {
    notes: [Note!]!
  }
  type Mutation {
    createNote(title: String!, content: String!, createdAt: String!): Note!
  }
`;

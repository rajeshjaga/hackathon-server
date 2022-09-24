import { ApolloServer, gql } from "apollo-server";
const url = "http://localhost:4000/graphql";

const typeDefs = gql`
  type User {
    name: String!
    devices: String!
  }
  type Query {
    queryUser: [User]!
  }
  type Mutation {
    addUser(name: String!, devices: String!): User!
  }
`;

var user = [];

const resolvers = {
  Query: {
    queryUser: () => user,
  },

  Mutation: {
    addUser: (parent, args) => {
      user.push(args);
      return args;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

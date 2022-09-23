import { ApolloServer, gql } from "apollo-server";
const url = "http://localhost:4000/graphql";

const typeDefs = gql`
  type User {
    name: String!
    devices: String!
  }
  type Query {
    user: User!
  }
  type Mutation {
    addUser(name: String!, devices: String!): User
  }
`;

const resolvers = {
  Query: {
    user: () => {
      return {
        name: "Bob",
        devices: "laptop",
      };
    },
  },
  Mutation: {
    addUser: (parent, args) => {
      user(args.name, args.devices);
      return args;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

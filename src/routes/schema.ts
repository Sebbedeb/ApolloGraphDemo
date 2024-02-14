import { QueryResolvers } from '../resolvers/query.js';
import { MutationResolvers } from '../resolvers/mutation.js';

const typeDefs = `
  type Query {
    hello: String
    persons: [Person]
    person(id: ID!): Person
    adresses: [Adress]
    adress(id: ID!): Adress
  }
  type Mutation {
    createPerson(name: String!, email: String!, age: Int): Person
    createAdress(street: String!, city: String!, zip: String!): Adress
  }
  type Person {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
  type Adress {
    id: ID!
    street: String!
    city: String!
    zip: String!
  }
`;

const resolvers = {
  Query: QueryResolvers.Query,
  Mutation: MutationResolvers.Mutation
};

export { typeDefs, resolvers };

import { persons } from "../routes/data.js";
const QueryResolvers = {
  Query: {
    hello: () => "Hello world!",

    persons: () => persons,
    person: (
      _parent: never,
      args: { id: string },
      _context: never,
      _info: never
    ) => {
      return persons.find((person) => person.id === args.id);
    },
  },
};

export { QueryResolvers };

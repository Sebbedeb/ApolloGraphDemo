import { persons } from "../routes/data.js";
const QueryResolvers = {
    Query: {
        hello: () => "Hello world!",
        persons: () => persons,
        person: (_parent, args, _context, _info) => {
            return persons.find((person) => person.id === args.id);
        },
    },
};
export { QueryResolvers };

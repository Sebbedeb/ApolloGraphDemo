import { persons, adresses } from '../routes/data.js';
const MutationResolvers = {
    Mutation: {
        createPerson: (_parent, args, _context, _info) => {
            const newPerson = {
                id: String(persons.length + 1),
                name: args.name,
                email: args.email,
                age: args.age !== undefined ? args.age : 0, // Providing a default value if age is not provided
            };
            persons.push(newPerson);
            return newPerson;
        },
        createAdress: (_parent, args, _context, _info) => {
            const newAdress = {
                id: String(persons.length + 1),
                street: args.street,
                city: args.city,
                zip: args.zip,
            };
            adresses.push(newAdress);
            return newAdress;
        }
    }
};
export { MutationResolvers };

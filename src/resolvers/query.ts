import { persons } from "../routes/data";}
const QueryResolvers = {
    Query: {
        hello: () => "Hello world!",

        persons: () => persons,
        persons: (_parent: never, args: { id: string }, _context: never, _info: never) => {
            return persons.find((person) => person.id === args.id);
        }

        users: () => users,
        user: (_parent: never, args: { id: string }, _context: never, _info: never) => {
            return users.find((user) => user.id === args.id);
        },
        book: (_parent: never, args: { id: string }, _context: never, _info: never) => {
            return books.find((book) => book.id === args.id);
        },
        books: () => books,
        category: (_parent: never, args: { id: string }, _context: never, _info: never) => {
            return categories.find((category) => category.id === args.id);
        },
        categories: () => categories,
    }
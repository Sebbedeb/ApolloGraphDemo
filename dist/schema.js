const typeDefs = `#graphql 
type Query {
    hello: String
    users: [User]
    user(id: ID!): User
    books: [Book]
    book(id: ID!): Book
    categories: [Category]
    category(id: ID!): Category
}
type Mutation {
    createUser(name: String!, email: String!, age: Int): User
    createBook(title: String!, author: String!, publishedDate: String!, category: ID!, rating: Int!): Book
}
type User {
    id: ID!
    name: String!
    email: String!
    age: Int
}
type Book {
    id: ID!
    title: String!
    author: String!
    publishedDate: String!
    category: Category!
    rating: Int!
}
type Category {
    id: ID!
    name: String!
}
`;
const categories = [
    {
        id: "1",
        name: "Fiction",
    },
    {
        id: "2",
        name: "Non-Fiction",
    },
    {
        id: "3",
        name: "Science Fiction",
    },
];
const books = [
    {
        id: "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedDate: "1925",
        category: { id: "1", name: "Fiction" },
        rating: 5,
    },
    {
        id: "2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedDate: "1960",
        category: { id: "1", name: "Fiction" },
        rating: 4,
    },
    {
        id: "3",
        title: "1984",
        author: "George Orwell",
        publishedDate: "1949",
        category: { id: "3", name: "Science Fiction" },
        rating: 5,
    },
];
const users = [
    {
        id: "1",
        name: "John Doe",
        email: "john@mail.com",
        age: 25,
    },
    {
        id: "2",
        name: "Jane Doe",
        email: "jane@mail.com",
        age: 30,
    },
    {
        id: "3",
        name: "John Smith",
        email: "jonny@mail.com",
        age: 35,
    },
];
const resolvers = {
    Query: {
        hello: () => "Hello world!",
        users: () => users,
        user: (_parent, args, _context, _info) => {
            return users.find((user) => user.id === args.id);
        },
        book: (_parent, args, _context, _info) => {
            return books.find((book) => book.id === args.id);
        },
        books: () => books,
        category: (_parent, args, _context, _info) => {
            return categories.find((category) => category.id === args.id);
        },
        categories: () => categories,
    },
    Mutation: {
        createUser: (_parent, args, _context, _info) => {
            const newUser = {
                id: String(users.length + 1),
                name: args.name,
                email: args.email,
                age: args.age !== undefined ? args.age : 0, // Providing a default value if age is not provided
            };
            users.push(newUser);
            return newUser;
        },
        createBook: (_parent, args, _context, _info) => {
            const category = categories.find(cat => cat.id === args.category);
            if (!category) {
                throw new Error('Category not found');
            }
            const newBook = {
                id: String(books.length + 1),
                title: args.title,
                author: args.author,
                publishedDate: args.publishedDate,
                category,
                rating: args.rating,
            };
            books.push(newBook);
            return newBook;
        },
    },
};
export { typeDefs, resolvers };

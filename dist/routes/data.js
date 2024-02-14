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
export { books, categories, users };


type Book = {
    id: string;
    title: string;
    author: string;
    publishedDate: string;
    category: Category;
    rating: number;
};
type Category = {
    id: string;
    name: string;
};

type User = {
    id: string;
    name: string;
    email: string;
    age?: number;
};

export { Book, Category, User };
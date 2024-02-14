type Person = {
    id: string;
    name: string;
    email: string;
    age?: number;
};

type Adress = {
    id: string;
    street: string;
    city: string;
    zip: string;
};
export { Person, Adress };
import Author from "./authorType";

export default interface Book {
    id: string,
    bookImage: string,
    title: string,
    author: Author,
    referralHref: string,
    description: string,
}
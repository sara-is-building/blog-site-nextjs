import Author from "./authorType";

export default interface Article {
    postImage: string;
    id: string,
     title: string,
     href: string,
     description: string,
     date: string, 
     datetime: string,
     category: string,
     author: Author
}

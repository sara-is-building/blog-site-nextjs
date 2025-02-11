import Book from "../types/bookType";
import { TestAuthors } from "./authors"

export class TestBooks {
static book1: Book = 
    {
        id: "01",
        bookImage: "/CleanCode.jpg",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: TestAuthors.author1,
        referralHref: "#",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti porttitor porttitor id ultrices sollicitudin nascetur potenti. Fringilla pellentesque efficitur mus hac; maecenas dapibus.",
      };
      static book2: Book = 
      {
        id: "02",
        bookImage: "/grokkingAlgorithms.jpg",
        title: "grokking algorithms",
        author: TestAuthors.author2,
        referralHref: "#",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti porttitor porttitor id ultrices sollicitudin nascetur potenti. Fringilla pellentesque efficitur mus hac; maecenas dapibus.",
      };

      static book3: Book = {
        id: "03",
        bookImage: "/EffectiveJava.jpg",
        title: "Effective Java",
        author: TestAuthors.author3,
        referralHref: "#",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti porttitor porttitor id ultrices sollicitudin nascetur potenti. Fringilla pellentesque efficitur mus hac; maecenas dapibus.",
      };
        
      };
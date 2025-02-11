import { render, screen } from "@testing-library/react"
import BookReviewComponent from "./bookReviewComponent"
import { TestBooks } from "@/app/testData/books"

test("Clean Code Book Image Renders", () => {
    render(<BookReviewComponent {...TestBooks.book1}/>)

    expect(screen.getByText(/Clean Code/)).toBeInTheDocument();
    const cleanCodeImage = screen.getByLabelText(TestBooks.book1.title+" Cover Image");
    expect(cleanCodeImage).toHaveRole("img");
})

test("grokking algorithms Book Image Renders", () => {
    render(<BookReviewComponent {...TestBooks.book2}/>)

    expect(screen.getByText(/grokking algorithms/)).toBeInTheDocument();
    const cleanCodeImage = screen.getByLabelText(TestBooks.book2.title+" Cover Image");
    expect(cleanCodeImage).toHaveRole("img");
})

test("Effective Java Book Image Renders", () => {
    render(<BookReviewComponent {...TestBooks.book3}/>)

    expect(screen.getByText(/Effective Java/)).toBeInTheDocument();
    const cleanCodeImage = screen.getByLabelText(TestBooks.book3.title+" Cover Image");
    expect(cleanCodeImage).toHaveRole("img");
})
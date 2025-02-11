import Book from "@/app/types/bookType"
import Image from "next/image"

export default function BookReviewComponent(book: Book) {
    const bookImageAriaLabel = book.title + " Cover Image";
    return(
        <div className="grid items-center w-1/3" aria-label={book.title}>
                                <Image
                                    className="dark"
                                    src={book.bookImage}
                                    alt={book.title}
                                    aria-label={bookImageAriaLabel}
                                    width={180}
                                    height={38}
                                    priority
                                />
                                <div className="flex items-center gap-auto mt-6 text-lg">
                                    <p aria-label="book-title">{book.title}</p>
                                </div>
                                <div className="flex items-center gap-auto mt-6 text-lg">
                                    <p>{book.author.name}</p>
                                </div>
                                <div className="flex items-center gap-auto mt-6 text-lg">
                                    <p>How this book helped me:</p>
                                </div>
                                <div className="flex items-center gap-auto mt-6 text-lg">
                                    <p>{book.description}</p>
                                </div>
                            </div>
    )
};
import BookReviewComponent from "./bookReviewComponent";
import { TestBooks } from "@/app/testData/books";

export default function BookReviews() {
    return (
        <div className="flex basis-4/5 bg-white py-24 sm:py-32">
            <div className="mx-auto  px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <div className="flex flex-wrap">
                    </div>
                    <h1 className="text-pretty text-4xl font-semibold text-black tracking-tight sm:text-5xl">Software Development Fundamentals</h1>
                    <p className="mt-2 text-black text-lg/8">These are a few of the books that helped me when I first started as a software developer. They allowed me to stand out as a more refined software engineer, in a sea of junior engineers.</p>
                </div>
                <div className="flex items-center col-3 mt-10  gap-x-10 gap-y-10 border-spacing-3 text-black border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <BookReviewComponent {...TestBooks.book1}/>
                    <BookReviewComponent {...TestBooks.book2}/>
                    <BookReviewComponent {...TestBooks.book3}/>
                    
                </div>
            </div>
        </div>
    )
};
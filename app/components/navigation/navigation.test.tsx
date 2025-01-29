import { render, screen } from "@testing-library/react";
import NavBar from "./navigation";

test("Links render", () => {

    const domain: string = "http://localhost";

    render(<NavBar />)

    expect(screen.getByText("Book Recommendations"));
    const navigationLinks = screen.getAllByRole("link");
    expect(navigationLinks).toHaveLength(8);

    const homeLink = screen.getByRole("link", { name: /Home/ });
    expect(homeLink).toHaveAttribute("href");
    expect(homeLink).toHaveProperty("href", domain + "/");

    const blogLink = screen.getByRole("link", { name: /Blog/ });
    expect(blogLink).toHaveAttribute("href");
    expect(blogLink).toHaveProperty("href", domain + "/blog");

    const booksLink = screen.getByRole("link", { name: /Book Recommendations/ });
    expect(booksLink).toHaveAttribute("href");
    expect(booksLink).toHaveProperty("href", domain + "/book-recommendations");

    const aboutLink = screen.getByRole("link", { name: /Author/ });
    expect(aboutLink).toHaveAttribute("href");
    expect(aboutLink).toHaveProperty("href", domain + "/author");
});
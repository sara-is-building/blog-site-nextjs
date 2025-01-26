import { render, screen } from '@testing-library/react';
import NavBar from './navigation';

test('Links render', () => {
        render(<NavBar/>)

        expect(screen.getByText("Book Recommendations"));
        const navigationLinks = screen.getAllByRole("link");
        expect(navigationLinks).toHaveLength(5);
        
        const homeLink = screen.getByRole("link", {name: /Home/});
        expect(homeLink).toHaveAttribute('href');
        expect(homeLink).toHaveProperty('href', 'http://localhost/');

        const blogLink = screen.getByRole("link", {name: /Blog/});
        expect(blogLink).toHaveAttribute('href');
        expect(blogLink).toHaveProperty('href', 'http://localhost/blog');
});

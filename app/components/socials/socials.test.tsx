import { render, screen } from "@testing-library/react";
import Socials from "./socials";

test("Links render", () => {

    render(<Socials />);

    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks).toHaveLength(4);

    const mediumLink = screen.getByLabelText("Medium");
    expect(mediumLink).toHaveAttribute("href");
    expect(mediumLink).toHaveProperty("href", "https://sara-builds.medium.com/");

    const xLink = screen.getByLabelText("X");
    expect(xLink).toHaveAttribute("href");
    expect(xLink).toHaveProperty("href", "https://x.com/sara_builds");

    const gitHubLink = screen.getByLabelText("GitHub");
    expect(gitHubLink).toHaveAttribute("href");
    expect(gitHubLink).toHaveProperty("href", "https://github.com/sara-is-building");

    const buyCoffeeLink = screen.getByLabelText("Buy Me A Coffee");
    expect(buyCoffeeLink).toHaveAttribute("href");
    expect(buyCoffeeLink).toHaveProperty("href", "https://buymeacoffee.com/");

});

test("Icons render", () => {

    render(<Socials />);

    const socialIcons = screen.getAllByRole("img");
    expect(socialIcons).toHaveLength(4);

    const mediumIcon = screen.getByLabelText("Medium Icon");
    expect(mediumIcon).toHaveRole("img");

    const xIcon = screen.getByLabelText("X Icon");
    expect(xIcon).toHaveRole("img");

    const gitHubIcon = screen.getByLabelText("GitHub Icon");
    expect(gitHubIcon).toHaveRole("img");

    const buyCoffeeIcon = screen.getByLabelText("Buy Me a Coffee Icon");
    expect(buyCoffeeIcon).toHaveRole("img");

});

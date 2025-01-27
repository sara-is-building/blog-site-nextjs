import { BiCoffeeTogo } from "react-icons/bi";
import { SiGithub, SiMedium, SiX } from "react-icons/si";

export default function Socials() {
    return (
        <nav className="flex gap-6 p-1 flex-wrap">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://sara-builds.medium.com/"
                aria-label="Medium"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SiMedium width={16} height={16} aria-label="Medium Icon" role="img" />
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://x.com/sara_builds"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SiX width={16} height={16} aria-label="X Icon" role="img" />
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/sara-is-building"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SiGithub width={16} height={16} aria-label="GitHub Icon" role="img" />
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://buymeacoffee.com/"
                aria-label="Buy Me A Coffee"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BiCoffeeTogo width={16} height={16} aria-label="Buy Me a Coffee Icon" role="img" />
            </a>
        </nav>
    );
}
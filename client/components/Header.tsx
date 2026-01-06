import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-secondary/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/ico.png"
            alt="Refine logo"
            className="h-8 w-auto"
          />
          <span className="font-bold text-xl text-foreground hidden sm:inline">
            Refine
          </span>
        </Link>

        <a href="#contact">
          <button
            type="button"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
          >
            Request a Meeting
          </button>
        </a>
      </nav>
    </header>
  );
}

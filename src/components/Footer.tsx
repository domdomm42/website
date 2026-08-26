export default function Footer() {
  return (
    <footer className="mt-auto pt-8">
      <hr className="hairline mb-8" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-muted">
        <p>&copy; {new Date().getFullYear()} Oudom Lim</p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/oudomlim"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            data-cursor-hover
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/domdomm42"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            data-cursor-hover
          >
            GitHub
          </a>
          <a
            href="mailto:limoudom2001@gmail.com"
            className="nav-link"
            data-cursor-hover
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

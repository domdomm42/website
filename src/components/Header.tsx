import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="mb-12 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
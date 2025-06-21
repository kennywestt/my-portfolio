export default function Header(){
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-gray-800">MY PORTFOLIO</h1>
      <nav className="flex gap-4">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          GitHub
        </a>
        <a
          href="https://yourblog.tistory.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition"
        >
          Tistory
        </a>
      </nav>
    </header>
    );
}
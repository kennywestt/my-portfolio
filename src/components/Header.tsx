export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 text-black shadow-md flex items-center">
  {/* 왼쪽: 비움 */}
  <div className="flex-1"></div>
  {/* 가운데: 제목 */}
  <h1 className="flex-1 text-center text-2xl md:text-3xl font-bold text-white">PORTFOLIO</h1>
  {/* 오른쪽: 링크 */}
  <nav className="flex-1 flex justify-end gap-4">
    <a href="https://github.com/kennywestt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition">GitHub</a>
    <a href="https://kennywest.tistory.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition">Tistory</a>
  </nav>
</header>
  );
}
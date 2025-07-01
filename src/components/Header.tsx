import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-blue-500 shadow-md">
      <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
        {/* 왼쪽 비움 */}
        <div className="flex-1" />

        {/* 가운데 제목 */}
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold text-white">MY PORTFOLIO</h1>
        </div>

        {/* 오른쪽 링크들 */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <a
            href="https://github.com/kennywestt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href="https://kennywest.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition"
      >
        Tistory
      </a>
    </div>

  </div>
</header>

  );
}
export default Header;
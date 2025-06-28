export default function Footer() {
    return (
      <footer className="py-6 bg-white border-t">
        <div className="max-w-screen-xl mx-auto px-6 text-center text-gray-500">
          © {new Date().getFullYear()} Gyeonggeun. All rights reserved.
        </div>
      </footer>
    )
  }
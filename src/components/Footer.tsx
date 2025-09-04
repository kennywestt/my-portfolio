export default function Footer() {
    return (
      <footer className="relative py-6 [background-color:rgba(20,23,38,1)] ">
        {/* <StarsBackground/> */}
        <div className="max-w-screen-xl mx-auto px-6 text-center text-gray-100">
          © {new Date().getFullYear()} Gyeonggeun. All rights reserved.
          <p className="mt-2">
          이 사이트는 React, Tailwindcss, Next.js, three.js 를 사용하여 만들었습니다.
        </p>
        </div>
      </footer>
    )
  }
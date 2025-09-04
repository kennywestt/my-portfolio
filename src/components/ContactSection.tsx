import { useState } from "react";

export default function ContactSection() {

  const [isCopied, setIsCopied] = useState(false);
  const email = 'dlrudrms06177@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // 2초후에 원상태로
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
    return (
      <div className="bg-black">
      <section id="contact" className="relative py-20 [background-color:rgba(20,23,38,1)]
        rounded-t-2xl mx-auto">
        <div className="max-w-screen-xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6 mb-24 text-white ">Let's Contact</h2>
          <p className="mb-2 text-white">문의나 피드백이 있다면 아래 이메일로 언제든 연락해주시면 감사하겠습니다.</p>
          <div className="flex flex-col items-center justify-center mb-8">
            <button 
              onClick={handleCopy} 
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>{email}
            </button>
            {isCopied && (
              <span className="flex items-center text-sm mt-1 text-cyan-400">
                복사완료
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </section>
      </div>
    )
  }
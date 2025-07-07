import StarsBackground from "./StarsBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden"
    >
      <StarsBackground />

      <div className="flex flex-col items-center relative z-10">
        <div className="pt-8 md:pt-18 lg:pt-28 px-6">
          <h1 className="text-lg md:text-2xl lg:text-3xl text-center text-slate-500 mb-5">
            안녕하세요 저는 웹 개발자<br/><span className="text-3xl md:text-4xl lg:text-5xl text-center text-gray-300 font-bold">이경근입니다.</span>
          </h1>
          {/* 각 p 태그를 감싸는 div에 flex 및 justify-center 적용 */}
          <div className="flex justify-center w-full">
            <p className="text-base md:text-xl lg:text-2xl mb-2 text-slate-300 max-w-full sm:max-w-xl md:max-w-2xl break-words">
              어제와 다른 나를 꿈꾸고 변화하는 세상에서 끊임없이 도전합니다.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <p className="text-xs md:text-sm lg:text-base mb-8 text-slate-200 max-w-full sm:max-w-xl md:max-w-2xl break-words">
              사용자에게 먼저 다가갈 수 있는 웹사이트의 프론트엔드 부분을 주로 담당하고 있습니다.
            </p>
          </div>
        </div>
        <div className="relative mt-8">
          <img
            src="/hotelProject.png"
            alt="profile"
            className="w-60 h-60 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        <p className="text-sm mt-5 text-slate-200"> {/* 글자 크기 조절 */}
          제 포트폴리오 사이트에 와주셔서 감사드립니다.
        </p>
      </div>
    </section>
  );
}

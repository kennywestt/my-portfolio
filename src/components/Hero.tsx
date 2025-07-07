import StarsBackground from "./StarsBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex justify-center bg-black"
    >
      <StarsBackground />

<div className="flex flex-col items-center">
      <div className="relative pt-60 text-left">
        <h1 className="text-4xl font-bold mb-4 animate-fade-down animate-once text-white">
          안녕하세요. 저는 웹 개발자 이경근입니다.
        </h1>
        <p className="text-white mb-10" data-aos="fade-up" data-aos-delay="200" >
          사용자 경험을 최우선으로 만드는 프론트엔드 개발자입니다.
        </p>
        </div>
        <div className="relative ">
        <img
         src="/hotelProject.png"
        alt="profile"
        className="relative w-60 h-60 z-10 rounded-full border-2 border-white"
      />
      </div>
      </div>
    </section>
  );
}

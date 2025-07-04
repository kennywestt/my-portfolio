import StarsBackground from "./StarsBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-black"
    >
      <StarsBackground />

      <div className="pt-2 text-left relative">
        <h1 className="text-4xl font-bold mb-4 animate-fade-down animate-once text-white">
          프론트엔드 개발자 이경근입니다.
        </h1>
        <p className="text-white" data-aos="fade-up" data-aos-delay="200" >
          사용자 경험을 최우선으로 만드는 프론트엔드 개발자입니다.
        </p>
      </div>
      <img
        // src="/your-photo.png"
        alt="profile"
        className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-4 border-white z-10"
      />
    </section>
  );
}

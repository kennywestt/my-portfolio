export default function Hero() {
  return (
    <section id="hero" 
    className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
        <h1 
        className="text-6xl font-bold mb-4 animate-fade-down animate-once">안녕하세요 프론트엔드 개발자 이경근입니다.</h1>
        <p data-aos="fade-up" data-aos-delay="200">사용자 경험을 최우선으로 만드는 프론트엔드 개발자입니다.</p>
    </section>
  );
}
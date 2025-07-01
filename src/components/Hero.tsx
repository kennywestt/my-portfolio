import { useEffect, useRef } from 'react';

export default function Hero() {

  // const heroRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (!heroRef.current) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         heroRef.current?.classList.add('animate-slide-up');
  //       } else {
  //         heroRef.current?.classList.remove('animate-slide-up');
  //       }
  //     },
  //     { threshold: 0.5 } //50%이상 보일 때 애니메이션 실행행
  //   );

  //   observer.observe(heroRef.current);

  //   return () => {
  //     if (heroRef.current) {
  //       observer.unobserve(heroRef.current);
  //     }
  //   }
  // }, []);

  return (
    <section
      id="hero"
      className="fixed top-0 left-0 w-full h-screen z-0 flex items-center justify-center bg-white"
    >
      <div className="text-center">
      <h1
        className="text-4xl font-bold mb-4 animate-fade-down animate-once">안녕하세요 프론트엔드 개발자 이경근입니다.</h1>
      <p data-aos="fade-up" data-aos-delay="200">사용자 경험을 최우선으로 만드는 프론트엔드 개발자입니다.</p>
      </div>
      <img
        src="/your-photo.png"
        alt="profile"
        className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-4 border-white z-10"
      />
    </section>
  );
}
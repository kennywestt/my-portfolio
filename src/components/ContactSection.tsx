import StarsBackground from "./StarsBackground";

export default function ContactSection() {
    return (
      <section id="contact" className="relative py-20 bg-black">
        <StarsBackground/>
        <div className="max-w-screen-xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="mb-8 text-white">문의나 피드백이 있다면 언제든 연락해주세요.</p>
          {/* 간단한 연락 폼 또는 소셜 링크 */}
        </div>
      </section>
    )
  }
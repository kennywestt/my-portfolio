import SkillSection from "./SkillSection";

export default function AboutSection() {
    return (
      <section id="about" className="relative z-10 pt-24 pb-24 px-12 min-h-screen [background-color:rgba(20,23,38)]"
      >
      <div className="max-w-screen-xl mx-auto md:px-36">
        <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
        <p className="text-xl mb-4 text-white">
          사용자에게 실생활에서 유용한 경험을 제공하는 개발에 보람을 느끼며 일상을 더 편리하게 바꾸기 위해 끊임없이 기술을 탐구하고 고민하며 개발하고 있습니다.
        </p>
        {/* 아래는 스크롤용 더미 */}
        <div className="text-white space-y-4 mb-8">
          {Array(20).fill(0).map((_, i) => (
            <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          ))}
        </div>

        <SkillSection />
      </div>
    </section>
    )
  }
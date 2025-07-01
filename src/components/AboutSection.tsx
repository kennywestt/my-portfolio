export default function AboutSection() {
    return (
      <section
      id="about"
      className="relative z-10 min-h-screen bg-blue-500 text-white px-6 py-10"
    >
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg">
          사용자에게 실생활에서 유용한 경험을 제공하는 개발에 보람을 느끼며 일상을 더 편리하게 바꾸기 위해 끊임없이 기술을 탐구하고 고민하며 개발하고 있습니다.
        </p>
        {/* 아래는 스크롤용 더미 */}
        <div>
          {Array(20).fill(0).map((_, i) => (
            <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          ))}
        </div>
      </div>
    </section>
    )
  }
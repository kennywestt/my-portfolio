import SkillSection from "./SkillSection";

export default function AboutSection() {
  return (
    <div className="bg-black min-h-screen w-full">
      <section id="about" className="relative z-10 pt-24 pb-24 px-4 sm:px-8 md:px-12 min-h-screen
        [background-color:rgba(20,23,38,1)] border-t border-gray-700/70 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.3)]
        rounded-t-2xl mx-auto"
      >
        <div className="max-w-screen-xl mx-auto md:px-36">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center w-full gap-4">
            {/* 왼쪽 라인 */}
            <div className="w-10 h-px bg-slate-500" />

            {/* 텍스트 */}
            <span className="whitespace-nowrap text-slate-300">About Me</span>

            {/* 오른쪽 라인 */}
            <div className="flex-grow h-px bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600" />
          </h2>

          {/* 개발 철학 */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-slate-300 mb-2">
              개발 철학은 무엇인가요?
            </h3>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-gray-300 leading-relaxed">
                저는 사용자 중심의 개발을 가장 중요하게 생각합니다. 단순히 기능을
                구현하는 것을 넘어서 사용자가 어떻게 느끼고 얼마나 쉽게 사용할 수
                있는지를 항상 먼저 고민합니다. 또한 개발은 혼자 하는 작업이 아닌 만큼
                협업과 소통 그리고 함께 성장하는 태도를 잃지 않으려 노력합니다.
                기술은 결국 사람을 위한 수단이라는 마음으로 개발에 임합니다.
              </p>
            </div>
          </div>

          {/* Q1 */}
          {/* <div className="mb-10">
            <h3 className="text-2xl font-semibold text-slate-300 mb-2">
              Q1. 새로운 기술은 어떻게 배우시나요?
            </h3>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-gray-300 leading-relaxed">
                저는 직접 만들어보며 배우는 걸 선호합니다. 문서만 읽는 것보다 작게라도
                무언가를 구현해보면 빠르게 이해할 수 있고 오래 기억에 남습니다.
                배운 내용을 정리하거나 팀원들과 공유하면서 더 깊이 익히는 편입니다.
                변화에 유연하게 대응하고 늘 한 단계 더 성장하는 개발자가 되기 위해
                꾸준히 노력 중입니다.
              </p>
            </div>
          </div> */}

          {/* Q2 */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-slate-300 mb-2">
              Q1) 협업에서 가장 중요하게 생각하는 것은 무엇인가요?
            </h3>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-gray-300 leading-relaxed">
                협업에서 가장 중요한 건 명확한 소통과 신뢰라고 생각합니다. 기능
                구현만큼이나 팀의 방향성과 사용자 경험을 함께 고민하는 것이
                중요하다고 느껴요. 저는 코드의 가독성과 일관성을 항상 신경 쓰고
                피드백을 열린 자세로 받아들이며 함께 일하기 좋은 개발자가 되기 위해
                노력하고 있습니다.
              </p>
            </div>
          </div>

          {/* Q2 */}
          <div className="pb-48">
            <h3 className="text-2xl font-semibold text-slate-300 mb-2">
              Q2) 개발자로서 이루고 싶은 목표는 무엇인가요?
            </h3>
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-gray-300 leading-relaxed">
                사용자에게 진짜 필요한 서비스를 만들고 싶습니다. 단순히 멋진 기술을
                구현하는 것보다 사람들의 일상을 더 편리하게 바꾸는 경험을 만드는
                개발자가 되는 것이 제 목표입니다. 기술은 수단일 뿐이고 그 기술로
                어떤 가치를 만들어내는지가 더 중요하다고 생각합니다.
              </p>
            </div>
          </div>

          <SkillSection />
        </div>
      </section>
    </div>
  )
}
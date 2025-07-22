import { JSX, useState } from "react";
import { FaJs, FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaSwift, FaAndroid, FaGithub } from "react-icons/fa";
import { SiDart, SiFlutter, SiTypescript, SiFirebase, SiMariadb, SiKotlin, SiC, SiCplusplus, SiSass, SiTailwindcss, SiVuedotjs, SiSourcetree, SiMysql, SiXcode } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";

// 스킬 타입 정의 (설명 추가)
type Skill = {
  name: string;
  icon: () => JSX.Element;
  description: string;
};

type Category = "Language" | "Frontend" | "Backend" | "Database" | "ETC";

// 샘플: Language만 작성 (다른 카테고리도 동일하게 확장)
const SKILL_LIST: Record<Category, Skill[]> = {
    Language: [
        {
          name: "JavaScript",
          icon: () => <FaJs className="text-yellow-400" />,
          description: "ES6+ 문법을 활용하여 다양한 웹 기능을 개발할 수 있습니다.",
        },
        {
          name: "TypeScript",
          icon: () => <SiTypescript className="text-blue-500" />,
          description: "정적 타입으로 코드 작성을 해봤습니다.",
        },
        {
          name: "Dart",
          icon: () => <SiDart className="text-cyan-500" />,
          description: "Dart 문법을 배워 블로그에 정리하면서 공부했습니다.",
        },
        {
          name: "Python",
          icon: () => <FaPython className="text-blue-500" />,
          description: "학부 시절 Python 기본적인 프로그래밍 배웠웠습니다.",
        },
        {
          name: "Java",
          icon: () => <FaJava className="text-orange-600" />,
          description: "학부 시절 자바를 학습하며 OOP에 대한 기본기를 다졌습니다.",
        },
        {
          name: "C",
          icon: () => <SiC className="text-blue-800" />,
          description: "학부 시절 C 언어를 학습하여 기본적인 개념과 알고리즘을 이해.",
        },
        {
          name: "C++",
          icon: () => <SiCplusplus className="text-blue-400" />,
          description: "학부시절 간단하게 배운 적이 있습니다.",
        },
        {
          name: "Kotlin",
          icon: () => <SiKotlin className="text-purple-500" />,
          description: "Android 앱 개발 및 간단한 프로젝트에 사용했습니다.",
        },
        {
          name: "Swift",
          icon: () => <FaSwift className="text-orange-400" />,
          description: "IOS 앱 개발 입문 경험이 있습니다.",
        },
      ],
      Frontend: [
        {
          name: "React",
          icon: () => <FaReact className="text-cyan-400" />,
          description: "재사용성 높은 컴포넌트 기반 UI 개발 경험이 있습니다다.",
        },
        {
          name: "React Native",
          icon: () => <TbBrandReactNative className="text-blue-400" />,
          description: "모바일 앱 크로스플랫폼 개발에 활용.",
        },
        {
          name: "HTML5",
          icon: () => <FaHtml5 className="text-orange-500" />,
          description: "웹 표준을 지키는 시멘틱 마크업 가능.",
        },
        {
          name: "CSS3",
          icon: () => <FaCss3Alt className="text-blue-400" />,
          description: "반응형, 다양한 UI 스타일링에 익숙함.",
        },
        {
          name: "SCSS",
          icon: () => <SiSass className="text-pink-400" />,
          description: "SCSS의 네스팅 기능을 사용하여 코드 구조를 더 직관적으로 만들었습니다.",
        },
        {
          name: "Tailwind CSS",
          icon: () => <SiTailwindcss className="text-cyan-400" />,
          description: "개인 포트폴리오 UI를 반응형 디자인과 Three.js을 활용하여 개발.",
        },
        {
          name: "Flutter",
          icon: () => <SiFlutter className="text-sky-400" />,
          description: "Dart 언어를 사용해 간단한 기능을 만들어 본 적 있음.",
        },
      ],
      Backend: [
        {
          name: "Node.js",
          icon: () => <FaNodeJs className="text-green-600" />,
          description: "비동기 처리와 간단한 API 서버 개발이 가능.",
        },
        {
          name: "Firebase",
          icon: () => <SiFirebase className="text-yellow-400" />,
          description: "Authentication, 실시간 DB, 배포 등 다양한 기능 활용 경험.",
        },
      ],
      Database: [
        {
          name: "MariaDB",
          icon: () => <SiMariadb className="text-blue-700" />,
          description: "호텔 예약 시스템에서 사용자 정보와 예약 데이터를 관리.",
        },
        {
          name: "MySQL Workbench",
          icon: () => <SiMysql className="text-blue-500" />,
          description: "호텔사이트 호스팅을 하기 위해서 사용했습니다.",
        },
        {
          name: "Firebase",
          icon: () => <SiFirebase className="text-yellow-400" />,
          description: "NoSQL 구조의 실시간 데이터베이스 활용.",
        },
      ],
      ETC: [
        {
          name: "Git",
          icon: () => <FaGit className="text-red-400" />,
          description: "프로젝트 버전 관리 및 협업 경험.",
        },
        {
          name: "GitHub",
          icon: () => <FaGithub className="text-black" />,
          description: "코드 공개, 협업 등 형상관리를 사용.",
        },
        {
          name: "Sourcetree",
          icon: () => <SiSourcetree className="text-blue-500" />,
          description: "GUI 환경에서 브랜치 및 커밋 관리에 활용.",
        },
        {
          name: "VSCode",
          icon: () => <VscVscode className="text-blue-400" />,
          description: "개발에 최적화된 다양한 확장 기능을 적극 활용.",
        },
        {
          name: "Android Studio",
          icon: () => <FaAndroid className="text-green-500" />,
          description: "Kotlin, Flutter 기반 앱 개발 환경으로 사용.",
        },
        {
          name: "Xcode",
          icon: () => <SiXcode className="text-blue-500" />,
          description: "학부시절 Swift, IOS 앱 개발 입문 경험.",
        },
      ],
    };

const CATEGORY: Category[] = ["Language", "Frontend", "Backend", "Database", "ETC"];

export default function SkillSection() {
  const [active, setActive] = useState<Category>("Language");

  return (
    <section className="mt-10 md:mt-16 px-2 md:px-0 text-[#c9d6e3] font-[Pretendard] w-full">
      <div className="mb-10 z-10">
      <h2 className="text-4xl font-bold text-white mb-12 flex items-center w-full gap-4">
            {/* 왼쪽 라인 */}
            <div className="w-10 h-px bg-slate-500" />

            {/* 텍스트 */}
            <span className="whitespace-nowrap text-slate-300">Skills</span>

            {/* 오른쪽 라인 */}
            <div className="flex-grow h-px bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600" />
          </h2>
      </div>
      {/* 반응형 레이아웃 */}
      <div className="flex flex-col md:flex-row gap-8 z-10">
        {/* 카테고리 탭 (반응형, 좌우 스크롤) */}
        <nav className="flex flex-row md:flex-col gap-2 md:pt-8 min-w-0 md:min-w-[120px] w-full md:w-auto overflow-x-auto whitespace-nowrap">
          {CATEGORY.map((cat) => (
            <button
              key={cat}
              className={`flex-1 md:flex-none text-left px-3 md:px-4 py-2 text-base md:text-lg rounded transition-all border-l-4 ${
                active === cat
                  ? "text-cyan-400 border-cyan-400 bg-white/5 font-semibold"
                  : "border-transparent hover:text-cyan-300"
              }`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
        {/* 스킬 리스트 */}
        <div className="flex-1 min-w-0 max-w-2xl mx-auto px-2 md:px-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            <span className="text-cyan-400">{active}</span>
          </h3>
          <div className="space-y-6">
            {SKILL_LIST[active].map((skill) => (
              <div key={skill.name} className="flex items-center gap-4 md:gap-6 pb-2">
                {/* 네온 원형 아이콘 (반응형 + aspect-square) */}
                <span className="relative flex items-center justify-center w-12 h-12 md:w-20 md:h-20 aspect-square">
                  <span className="absolute w-full h-full rounded-full border-4 border-cyan-400/40 blur-md opacity-70" />
                  <span className="absolute w-full h-full rounded-full border-2 border-cyan-400" />
                  <span className="relative text-2xl md:text-4xl bg-[#1a2230] rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center aspect-square">
                    {skill.icon()}
                  </span>
                </span>
                {/* 이름/설명 */}
                <div>
                  <div className="text-base md:text-xl font-bold text-white">{skill.name}</div>
                  <div className="text-gray-300 text-xs md:text-base mt-1">{skill.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

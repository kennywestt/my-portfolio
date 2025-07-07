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
          description: "정적 타입으로 더 견고한 코드 작성이 가능합니다.",
        },
        {
          name: "Dart",
          icon: () => <SiDart className="text-cyan-500" />,
          description: "Flutter 앱 개발에 활용 가능한 언어입니다.",
        },
        {
          name: "Python",
          icon: () => <FaPython className="text-blue-500" />,
          description: "간결한 문법으로 데이터 처리, 간단한 자동화에 사용합니다.",
        },
        {
          name: "Java",
          icon: () => <FaJava className="text-orange-600" />,
          description: "기초를 탄탄하게 쌓은 객체지향 언어, 학교 과제와 프로그램에 활용.",
        },
        {
          name: "C",
          icon: () => <SiC className="text-blue-800" />,
          description: "기본적인 알고리즘 구현 및 시스템 프로그래밍에 사용했습니다.",
        },
        {
          name: "C++",
          icon: () => <SiCplusplus className="text-blue-400" />,
          description: "객체지향 및 고성능 코딩 경험을 갖고 있습니다.",
        },
        {
          name: "Kotlin",
          icon: () => <SiKotlin className="text-purple-500" />,
          description: "Android 앱 개발 및 간단한 프로젝트에 사용.",
        },
        {
          name: "Swift",
          icon: () => <FaSwift className="text-orange-400" />,
          description: "iOS 앱 개발 입문 경험이 있습니다.",
        },
      ],
      Frontend: [
        {
          name: "React",
          icon: () => <FaReact className="text-cyan-400" />,
          description: "재사용성 높은 컴포넌트 기반 UI 개발 경험이 풍부합니다.",
        },
        {
          name: "React Native",
          icon: () => <TbBrandReactNative className="text-blue-400" />,
          description: "모바일 앱 크로스플랫폼 개발에 활용합니다.",
        },
        {
          name: "HTML5",
          icon: () => <FaHtml5 className="text-orange-500" />,
          description: "웹 표준을 지키는 시멘틱 마크업 가능합니다.",
        },
        {
          name: "CSS3",
          icon: () => <FaCss3Alt className="text-blue-400" />,
          description: "반응형, 다양한 UI 스타일링에 익숙합니다.",
        },
        {
          name: "SCSS",
          icon: () => <SiSass className="text-pink-400" />,
          description: "모듈화와 가독성 높은 스타일 작업에 활용합니다.",
        },
        {
          name: "Tailwind CSS",
          icon: () => <SiTailwindcss className="text-cyan-400" />,
          description: "유틸리티 퍼스트 CSS로 생산성과 일관성 있는 개발이 가능합니다.",
        },
        {
          name: "Flutter",
          icon: () => <SiFlutter className="text-sky-400" />,
          description: "크로스플랫폼 앱 UI를 빠르게 제작할 수 있습니다.",
        },
        {
          name: "Vue.js",
          icon: () => <SiVuedotjs className="text-green-400" />,
          description: "간결한 구조의 컴포넌트 기반 프론트엔드 경험이 있습니다.",
        },
      ],
      Backend: [
        {
          name: "Node.js",
          icon: () => <FaNodeJs className="text-green-600" />,
          description: "비동기 처리와 간단한 API 서버 개발이 가능합니다.",
        },
        {
          name: "Firebase",
          icon: () => <SiFirebase className="text-yellow-400" />,
          description: "Authentication, 실시간 DB, 배포 등 다양한 기능 활용 경험.",
        },
        {
          name: "TypeScript",
          icon: () => <SiTypescript className="text-blue-600" />,
          description: "Node.js 백엔드에서도 정적 타입으로 안정적인 개발이 가능합니다.",
        },
      ],
      Database: [
        {
          name: "MariaDB",
          icon: () => <SiMariadb className="text-blue-700" />,
          description: "MySQL과 호환되는 RDBMS. SQL 쿼리 작성 경험이 풍부합니다.",
        },
        {
          name: "MySQL",
          icon: () => <SiMysql className="text-blue-600" />,
          description: "관계형 데이터 모델링 및 쿼리 최적화 경험.",
        },
        {
          name: "MySQL Workbench",
          icon: () => <SiMysql className="text-blue-500" />,
          description: "ERD 설계와 쿼리 테스트에 사용.",
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
          description: "프로젝트 버전 관리 및 협업 경험이 많습니다.",
        },
        {
          name: "GitHub",
          icon: () => <FaGithub className="text-black" />,
          description: "코드 공개, 협업, 이슈 관리, CI 등 다양하게 사용합니다.",
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
          description: "Swift, iOS 앱 개발 입문 경험.",
        },
      ],
    };

const CATEGORY: Category[] = ["Language", "Frontend", "Backend", "Database", "ETC"];

export default function SkillSection() {
  const [active, setActive] = useState<Category>("Language");

  return (
    <section className="mt-10 md:mt-16 px-2 md:px-0 text-[#c9d6e3] font-[Pretendard] w-full">
      <div className="mb-10 z-10">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          <span className="text-cyan-400 mr-2">#</span>Skills
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

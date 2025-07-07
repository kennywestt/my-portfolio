import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectCard";

const FILTERS = ["All", "Team", "Personal"] as const;
type Filter = typeof FILTERS[number];

// 임시 샘플 프로젝트 데이터
const PROJECTS: Project[] = [
  {
    title: "Hotel Renewal",
    period: "2024.12 ~ 2025.01",
    shortDesc: "신라호텔 사이트 리뉴얼 프로젝트",
    desc: "신라호텔 공식 사이트의 UI/UX를 개선하고, 예약 시스템을 전면 리뉴얼한 팀 프로젝트입니다. 메인, 예약, 고객센터 등 전체 페이지 반응형 구현과 결제 API 연동, MySQL 백엔드와의 데이터 흐름 설계까지 경험했습니다.",
    images: "/hotelProject.png",
    skills: ["React", "Node.js", "JavaScript", "SCSS", "MySQL", "MariaDB", "Toss Payments"],
    tags: ["팀", "웹", "메인"],
    type: "Team",
    notionUrl: "https://like-mars-d0f.notion.site/1963b361337e80c5a305cb527a2ed52a?pvs=74",
    githubUrl: "https://github.com/kennywestt/shilla_project",
    siteUrl: "https://kennywest.tistory.com/",
  },
  {
    title: "Portfolio",
    period: "2025.07 ~ 2025.07",
    shortDesc: "개인 포트폴리오 웹사이트",
    desc: "신라호텔 공식 사이트의 UI/UX를 개선하고, 예약 시스템을 전면 리뉴얼한 팀 프로젝트입니다. 메인, 예약, 고객센터 등 전체 페이지 반응형 구현과 결제 API 연동, MySQL 백엔드와의 데이터 흐름 설계까지 경험했습니다.",
    images: "/daterangepickerpic.png",
    skills: ["TypeScript", "TailwindCSS", "Next.js", "React.js", "Three.js"],
    tags: ["개인", "웹", "메인"],
    type: "Personal",
    notionUrl: "https://like-mars-d0f.notion.site/1963b361337e80c5a305cb527a2ed52a?pvs=74",
    githubUrl: "https://github.com/kennywestt/shilla_project",
    siteUrl: "https://kennywest.tistory.com/",
  },
  {
    title: "Eazypizy",
    period: "2023.03 ~ 2023.06",
    shortDesc: "흡연구역 및 금연구역 위치 확인 앱",
    desc: "신라호텔 공식 사이트의 UI/UX를 개선하고, 예약 시스템을 전면 리뉴얼한 팀 프로젝트입니다. 메인, 예약, 고객센터 등 전체 페이지 반응형 구현과 결제 API 연동, MySQL 백엔드와의 데이터 흐름 설계까지 경험했습니다.",
    images: "/hotelProject.png",
    skills: ["Kotlin", "Android SDK","MVVM"],
    tags: ["팀", "웹", "메인"],
    type: "Team",
    notionUrl: "https://like-mars-d0f.notion.site/1963b361337e80c5a305cb527a2ed52a?pvs=74",
    githubUrl: "https://github.com/kennywestt/shilla_project",
    siteUrl: "https://kennywest.tistory.com/",
  },
  {
    title: "Perfume Renewal",
    period: "2025.01 ~ 2025.02",
    shortDesc: "조말론 향수 리뉴얼 프로젝트",
    desc: "조말론 공식 사이트의 UI/UX를 개선함 리액트 네이티브로 구현.",
    images: "/hotelProject.png",
    skills: ["React", "Node.js", "MySQL", "Toss Payments"],
    tags: ["팀", "웹", "메인"],
    type: "Team",
    notionUrl: "https://like-mars-d0f.notion.site/1963b361337e80c5a305cb527a2ed52a?pvs=74",
    githubUrl: "https://github.com/kennywestt/shilla_project",
    siteUrl: "https://kennywest.tistory.com/",
  },
];

export default function ProjectSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.type === filter);

  return (
    <section id="projects" className="relative pt-24 pb-48 px-12 min-h-screen text-white [background-color:rgba(20,23,38)]">
      <div className="max-w-screen-xl mx-auto md:px-36">
        <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Projects</h2>
        {/* 상단 필터 + 개수 */}
        <div className="flex gap-2 items-center mb-8">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-base font-semibold transition-all
                border-2
                ${filter === f
                  ? "bg-white text-gray-900 border-white shadow"
                  : "bg-gray-800/80 text-gray-300 border-gray-700 hover:bg-gray-700"}`}
            >
              {f}
            </button>
          ))}
          <span className="ml-4 text-xl text-cyan-300 font-bold">
            {filtered.length} Project{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
        {/* 프로젝트 카드 리스트 */}
        <div className="flex flex-col gap-30">
          {filtered.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

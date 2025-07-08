import { SiNotion } from "react-icons/si";

export type Project = {
  title: string;
  period: string;        // 날짜기간
  shortDesc: string;     // 간단설명
  desc: string;          // 자세한 설명
  images?: string; // Swiper 지원 위해 string[];
  skills: string[];      // 사용기술
  tags: string[];
  type: "All" | "Team" | "Personal";
  githubUrl?: string; // GitHub 레포지토리 URL
  siteUrl?: string;  // 배포된 사이트 URL
  notionUrl?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="z-10 bg-gray-800/40 backdrop-filter backdrop-blur-sm border border-gray-700/70 shadow-xl rounded-2xl flex flex-col
                  transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-white/60
                  transform hover:-translate-y-1 overflow-hidden">

      {/* 상단 콘텐츠 및 이미지 래퍼 (flex-row로 가로 배치) */}
      <div className="flex flex-col md:flex-row">
        {/* 왼쪽(내용) 영역: 패딩을 내부 div에 적용 */}
        {/* max-h-XX 및 overflow-y-auto custom-scrollbar 제거 */}
        <div className="flex flex-col justify-between basis-full md:basis-4/10 p-6 md:p-6">
          <div>
            <h3 className="text-3xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-lg text-gray-400 mb-4 font-medium">
              {project.period}
            </p>
          </div>
          <p className="text-base text-gray-200 mb-3 leading-relaxed">
            {project.shortDesc}
          </p>
          <p className="text-gray-300 text-sm mb-5 leading-loose">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {project.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gradient-to-r from-teal-600 to-cyan-700 text-xs text-white rounded-full font-semibold shadow-md
                           transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 오른쪽(이미지) 영역 */}
        {project.images && (
          // 이미지 컨테이너 자체에 고정된 높이를 부여하여 카드 높이 제어에 기여
          <div className="basis-full md:basis-6/10">
            <div className="w-full relative h-60 md:h-full md:min-h-[450px] md:max-h-[500px] rounded-t-xl md:rounded-l-none md:rounded-tr-2xl overflow-hidden
                            shadow-lg transform transition-all duration-300 ease-in-out hover:scale-[1.005] hover:shadow-xl">
              <img
                src={project.images}
                alt={project.title}
                className="object-cover object-top w-full h-full"
              />
              {/* 이미지 오버레이 (선택 사항: hover 시 제목 등 표시) */}
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xl font-bold p-4 text-center">{project.title}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 하단 푸터 영역: 태그와 링크를 포함, 카드 전체 너비로 확장 */}
      {(project.tags.length > 0 || project.githubUrl || project.siteUrl) && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4
                        bg-gradient-to-r from-gray-800/80 to-gray-700/60 border-t border-gray-700/70 rounded-b-2xl">
          {/* 태그 영역 (왼쪽) */}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700/60 text-xs text-gray-300 rounded-lg border border-gray-600 font-medium
                             transition-all duration-200 hover:bg-gray-600/60 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* GitHub 및 사이트 링크 아이콘 영역 (오른쪽) */}
          {(project.githubUrl || project.siteUrl) && (
            <div className="flex justify-center sm:justify-end gap-4">
              {project.notionUrl && (
                <a
                  href={project.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  title="Notion"
                >
                  <SiNotion className="h-6 w-6" />
                  <span className="text-sm font-semibold">Notion</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  title="View on GitHub"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017 2 16.273 4.887 19.818 8.815 20.142c.5.092.647-.217.647-.483 0-.237-.007-.866-.012-1.705-2.754.597-3.328-1.319-3.328-1.319-.448-1.141-1.093-1.444-1.093-1.444-.892-.604.07-.593.07-.593.987.07 1.503 1.014 1.503 1.014.872 1.493 2.292 1.063 2.853.81.09-.631.342-1.063.628-1.305-2.179-.247-4.463-1.088-4.463-4.823 0-1.067.38-1.933 1.003-2.61-.1-.246-.435-1.235.096-2.57 0 0 .817-.262 2.673 1.003.776-.215 1.595-.323 2.413-.328.818.005 1.637.113 2.413.328 1.856-1.265 2.673-1.003 2.673-1.003.532 1.335.197 2.324.097 2.57.623.676 1.002 1.543 1.002 2.61 0 3.744-2.287 4.572-4.471 4.814.35.3.67.803.67 1.614 0 1.16-.01 2.096-.01 2.38 0 .267.147.577.653.479C19.123 19.81 22 16.262 22 12.017 22 6.484 17.523 2 12 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">GitHub</span>
                </a>
              )}
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  title="Visit Website"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-sm font-semibold">Website</span>
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


export type Project = {
    title: string;
    period: string;        // 날짜기간
    shortDesc: string;     // 간단설명
    desc: string;          // 자세한 설명
    image?: string;
    skills: string[];      // 사용기술
    tags: string[];
    type: "All" | "Team" | "Personal";
  };

  export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-800/80 border border-gray-700 shadow-lg p-6 rounded-xl flex flex-col md:flex-row gap-6 transition-shadow hover:shadow-2xl max-w-4xl w-full mx-auto min-h-[600px] h-[600px]">
      {/* 왼쪽(내용) 40% */}
      <div className="flex flex-col justify-between basis-full md:basis-2/5">
        <div className="mb-1">
          <div className="text-3xl font-bold">{project.title}</div>
          <div className="text-m text-gray-400 mt-1">{project.period}</div>
        </div>
        <div className="text-base text-gray-200 mb-1">{project.shortDesc}</div>
        <div className="text-gray-300 text-sm mb-2">{project.desc}</div>
        <div className="flex flex-wrap gap-2 mb-1">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-teal-800/70 text-xs text-teal-200 rounded font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-900/80 text-xs text-gray-200 rounded-lg border border-gray-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 오른쪽(이미지) 60% */}
      {project.image && (
        <div className="rounded-lg overflow-hidden border border-gray-700 bg-gray-900 flex-shrink-0 basis-full md:basis-3/5 h-60 md:h-full flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover object-top w-full h-full"
            style={{ minHeight: 250 }}
          />
        </div>
      )}
    </div>
  );
}

  
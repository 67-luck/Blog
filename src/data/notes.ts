export interface Note {
  id: string;
  title: string;
  category: "基础语言" | "工程化" | "框架生态";
  updatedAt: string;
  summary: string;
  tags: string[];
  yuqueUrl: string;
}

export interface StudyRoadmapItem {
  phase: string;
  period: string;
  focus: string;
  outcome: string;
}

export const noteCategoryOrder: Note["category"][] = ["工程化"];

export const studyRoadmap: StudyRoadmapItem[] = [
  {
    phase: "工程化",
    period: "持续整理",
    focus: "沉淀项目结构、构建工具、环境配置、代码规范和接口联调流程。",
    outcome: "能独立搭建前端项目骨架，并把开发流程整理成可复用经验。",
  },
  {
    phase: "部署上线",
    period: "项目实践",
    focus: "记录本地构建、环境变量、Vercel 发布、路由回退和线上问题排查。",
    outcome: "能把 Vue 项目从本地开发推进到线上访问，并处理常见部署问题。",
  },
];

export const notes: Note[] = [
  {
    id: "frontend-engineering-notes",
    title: "前端工程化学习笔记",
    category: "工程化",
    updatedAt: "2026-07-05",
    summary:
      "整理前端项目工程化相关内容，包括项目结构、构建工具、环境配置、代码规范、接口联调和开发流程沉淀。",
    tags: ["工程化", "Vite", "项目规范"],
    yuqueUrl: "https://www.yuque.com/u64834742/fs2t31/ygz4kb48vggneiyl",
  },
  {
    id: "project-deploy-online",
    title: "项目部署上线记录",
    category: "工程化",
    updatedAt: "2026-07-05",
    summary:
      "记录项目从本地开发到线上访问的部署流程，涵盖构建、环境变量、Vercel 发布、路由回退和上线问题排查。",
    tags: ["部署上线", "Vercel", "上线排查"],
    yuqueUrl: "https://www.yuque.com/u64834742/fs2t31/tpzw1g3v5l34gtfh",
  },
];

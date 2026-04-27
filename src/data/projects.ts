export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  period: string;
  type: "业务项目" | "个人项目" | "学习沉淀";
  summary: string;
  role: string;
  techStack: string[];
  highlights: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "course-admin",
    name: "课程后台管理系统",
    period: "2025 - 2026",
    type: "业务项目",
    summary:
      "面向课程信息维护、教师管理、订单统计和运营配置的后台系统，重点解决高密度信息展示、权限页面拆分和数据回显体验。",
    role: "负责前端页面搭建、模块拆分、接口联调与交互优化。",
    techStack: [
      "Vue 3",
      "JavaScript",
      "Pinia",
      "Axios",
      "Element Plus",
      "ECharts",
      "Node.js",
    ],
    highlights: [
      "封装列表筛选、分页、弹窗表单等高频后台模块，减少重复开发成本。",
      "针对课程状态、上架流程、编辑回显等场景设计统一的数据流与错误提示。",
      "通过路由与菜单结构拆分多个业务子页面，保证后台信息层级清晰。",
      "整理接口字段映射与状态枚举，降低联调时的沟通和维护成本。",
    ],
    links: [
      { label: "在线预览", url: "https://luck67-preview-course-admin.vercel.app" },
      { label: "项目说明", url: "https://github.com/67-luck" },
      { label: "源码仓库", url: "https://github.com/67-luck" },
    ],
  },
  {
    id: "portfolio-blog",
    name: "前端求职简历博客",
    period: "2026",
    type: "个人项目",
    summary:
      "以“个人品牌 + 项目展示 + 技术笔记 + 音乐交互”为核心的作品站，用来服务前端求职场景，突出个人表达与工程能力。",
    role: "独立完成页面设计、数据组织、播放器联动、动态背景与整体体验优化。",
    techStack: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "Tailwind CSS",
      "Inspira UI",
    ],
    highlights: [
      "把个人信息、技术栈、项目亮点、学习笔记和音乐模块组织成统一入口。",
      "实现首页、音乐页、右下角悬浮播放器之间的全局播放状态共享。",
      "用组件化方式实现动态背景、歌词高亮、交互卡片与响应式布局。",
      "以数据驱动页面内容，方便后续持续补充真实项目与笔记链接。",
    ],
    links: [
      { label: "在线预览", url: "https://luck67-preview-portfolio-blog.vercel.app" },
      { label: "项目说明", url: "https://github.com/67-luck" },
      { label: "源码仓库", url: "https://github.com/67-luck" },
    ],
  },
  {
    id: "yuque-notes-hub",
    name: "前端学习笔记导航平台",
    period: "2025 - 持续维护",
    type: "学习沉淀",
    summary:
      "围绕 Vue、JavaScript、Node.js、Axios、Webpack 等技术栈建立的笔记索引页，用于把零散学习记录沉淀成可复用的知识入口。",
    role: "负责目录设计、知识分类、外链组织和站内导航整合。",
    techStack: ["Vue 3", "JavaScript", "Markdown", "语雀", "信息架构"],
    highlights: [
      "按技术栈维度整理知识入口，降低复习和复盘时的查找成本。",
      "将笔记与项目经验打通，让每个项目都能追溯到相关知识沉淀。",
      "通过统一卡片布局和标签体系，让页面既能展示学习广度也能展示持续性。",
    ],
    links: [
      { label: "在线预览", url: "https://luck67-preview-notes-hub.vercel.app" },
      { label: "语雀主页", url: "https://www.yuque.com/" },
      { label: "GitHub", url: "https://github.com/67-luck" },
    ],
  },
];

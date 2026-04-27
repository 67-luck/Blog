export interface HighlightItem {
  label: string;
  value: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const aboutData = {
  name: "Luck67",
  role: "前端开发工程师",
  status: "积极求职中",
  location: "中国 · 可远程 / 可快速到岗",
  summary:
    "专注 Vue 生态与前端工程化交付，擅长把复杂页面拆成稳定的组件、状态和接口层。这个站点同时承担简历展示、项目陈列、学习笔记导航与交互能力展示。",
  bio: [
    "我希望用一个可持续维护的前端项目来展示自己的技术能力，而不是只停留在静态简历。这个网站会持续承载个人介绍、项目经历、技术沉淀和交互实现。",
    "在技术侧，我已经掌握 Vue、JavaScript、Node.js、Axios、Webpack 等常见前端技术栈，并持续补齐 TypeScript、性能优化、工程化规范与可维护性设计。",
    "在项目实现上，我更关注真实业务场景里的问题，例如后台管理系统的信息密度、接口状态管理、组件复用、权限控制、列表性能和用户操作反馈。",
  ],
  highlights: [
    { label: "核心方向", value: "Vue 3 / JavaScript / 工程化" },
    { label: "项目特点", value: "后台管理、作品站、知识沉淀" },
    { label: "工作方式", value: "组件化、可维护、重交付" },
    { label: "面试状态", value: "可提供项目讲解与源码说明" },
  ] satisfies HighlightItem[],
  skillGroups: [
    {
      title: "前端框架与语言",
      items: ["Vue 3", "JavaScript", "TypeScript", "Pinia", "Vue Router"],
    },
    {
      title: "工程化与构建",
      items: ["Vite", "Webpack", "ESLint", "Prettier", "Git"],
    },
    {
      title: "接口与服务",
      items: ["Axios", "Node.js", "Express", "RESTful API", "JWT"],
    },
    {
      title: "样式与交互",
      items: ["CSS3", "Tailwind CSS", "Element Plus", "响应式布局", "动效实现"],
    },
  ] satisfies SkillGroup[],
  strengths: [
    "能独立完成中小型前端项目的页面开发、接口联调和部署整理。",
    "熟悉后台管理系统类项目的表格、筛选、表单、权限、图表等高频模块。",
    "愿意把项目讲清楚：技术选型、难点拆解、权衡取舍和可优化点都会整理出来。",
    "习惯做结构化沉淀，笔记、项目总结和代码组织会同步维护。",
  ],
  workStyle: [
    "优先保证结构清晰，再追求视觉表达。",
    "先做可运行版本，再做复用和体验增强。",
    "对状态管理、接口错误处理和组件边界比较敏感。",
  ],
  contact: {
    email: "2115759892@qq.com",
    github: "https://github.com/67-luck",
    yuque: "https://www.yuque.com/",
  },
};

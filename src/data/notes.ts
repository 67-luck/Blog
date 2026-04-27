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

export const noteCategoryOrder: Note["category"][] = ["基础语言", "工程化", "框架生态"];

export const studyRoadmap: StudyRoadmapItem[] = [
  {
    phase: "阶段一",
    period: "2025.03 - 2025.04",
    focus: "先把 HTML、CSS、JavaScript、TypeScript 基础打牢，重点练布局、异步、模块化和类型约束。",
    outcome: "能独立完成中小页面、懂浏览器运行机制，并能写出更稳的业务代码。",
  },
  {
    phase: "阶段二",
    period: "2025.05 - 2025.06",
    focus: "进入工程化，系统整理 Axios、Node.js、Webpack/Vite、环境配置和接口联调流程。",
    outcome: "能搭建项目骨架、封装请求层、理解构建过程，并能处理前后端协作问题。",
  },
  {
    phase: "阶段三",
    period: "2025.07 - 2025.09",
    focus: "集中攻 Vue 3、Pinia、Vue Router、组件拆分和后台项目常见模式。",
    outcome: "形成完整的框架开发能力，能从页面、状态、接口到交互独立落地项目。",
  },
];

export const notes: Note[] = [
  {
    id: "css-layout-motion",
    title: "CSS 布局、动画与响应式方案整理",
    category: "基础语言",
    updatedAt: "2025-09-18",
    summary:
      "沉淀 Flex、Grid、定位、过渡、关键帧、毛玻璃和移动端适配，专门为页面还原与动效实现打基础。",
    tags: ["CSS3", "Layout", "Animation"],
    yuqueUrl: "https://www.yuque.com/luck67/css/layout-motion",
  },
  {
    id: "javascript-core-mechanism",
    title: "JavaScript 核心机制与高频手写题",
    category: "基础语言",
    updatedAt: "2025-09-22",
    summary:
      "系统整理原型链、闭包、事件循环、this、Promise、数组方法和面试高频手写题。",
    tags: ["JavaScript", "Promise", "Event Loop"],
    yuqueUrl: "https://www.yuque.com/luck67/javascript/core-mechanism",
  },
  {
    id: "typescript-business-notes",
    title: "TypeScript 在业务项目中的约束设计",
    category: "基础语言",
    updatedAt: "2025-10-03",
    summary:
      "记录类型别名、接口、联合类型、泛型和接口响应类型约束，减少业务开发中的隐式错误。",
    tags: ["TypeScript", "Type System", "Business"],
    yuqueUrl: "https://www.yuque.com/luck67/typescript/business-types",
  },
  {
    id: "axios-request-governance",
    title: "Axios 二次封装与请求治理",
    category: "工程化",
    updatedAt: "2025-10-14",
    summary:
      "整理请求拦截器、错误处理、Token 续期、重复请求控制和接口模块拆分策略。",
    tags: ["Axios", "Request", "Token"],
    yuqueUrl: "https://www.yuque.com/luck67/axios/request-wrapper",
  },
  {
    id: "node-middle-layer",
    title: "Node.js 接口开发与中间层实践",
    category: "工程化",
    updatedAt: "2025-10-26",
    summary:
      "梳理 Express 路由、中间件、鉴权、跨域、代理和前后端联调时的常见问题处理方式。",
    tags: ["Node.js", "Express", "API"],
    yuqueUrl: "https://www.yuque.com/luck67/nodejs/api-practice",
  },
  {
    id: "webpack-build-optimization",
    title: "Webpack 与 Vite 的构建优化思路",
    category: "工程化",
    updatedAt: "2025-11-09",
    summary:
      "记录 Loader、Plugin、分包、缓存、资源处理和构建性能调优，建立完整的工程化视角。",
    tags: ["Webpack", "Vite", "Build"],
    yuqueUrl: "https://www.yuque.com/luck67/webpack/engineering",
  },
  {
    id: "vue-component-state",
    title: "Vue 3 组件通信与状态管理拆分",
    category: "框架生态",
    updatedAt: "2025-11-22",
    summary:
      "整理组件通信、组合式 API、Pinia 状态收敛和后台页面模块拆分经验，聚焦可维护性。",
    tags: ["Vue 3", "Pinia", "Composition API"],
    yuqueUrl: "https://www.yuque.com/luck67/vue/component-communication",
  },
];

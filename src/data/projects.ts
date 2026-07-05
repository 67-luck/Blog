export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  period: string;
  type: "实习项目" | "个人项目" | "学习沉淀";
  summary: string;
  role: string;
  techStack: string[];
  highlights: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "wallpaper-miniapp",
    name: "壁纸精选小程序",
    period: "2025/06 - 2025/09",
    type: "实习项目",
    summary:
      "一款基于 UniApp 开发并已上线的壁纸分享与下载平台，支持高清壁纸浏览、分类检索、下载保存、好友分享和朋友圈分享等能力。",
    role: "前端开发实习生，负责推荐、分类、我的等核心模块页面开发、接口联调和交互体验优化。",
    techStack: ["UniApp", "微信小程序", "JavaScript", "Axios", "CSS3"],
    highlights: [
      "实现首页轮播图动态展示，通过接口获取数据并完成自动轮播和点击跳转详情。",
      "实现分类详情页触底加载更多与下拉刷新，提升壁纸浏览效率。",
      "针对大尺寸壁纸，使用 uni.downloadFile 与 uni.saveImageToPhotosAlbum 完成保存到本地相册。",
      "通过图片压缩、懒加载等方式优化图片加载体验和页面流畅度。",
      "实现分享好友与微信朋友圈能力，增强用户传播和活跃度。",
    ],
    links: [
      { label: "项目说明", url: "https://github.com/67-luck" },
      { label: "GitHub", url: "https://github.com/67-luck" },
    ],
  },
  {
    id: "wallpaper-admin",
    name: "壁纸精选后台管理系统",
    period: "2025/03 - 2025/06",
    type: "实习项目",
    summary:
      "基于 Vue3 + Element Plus 开发的企业内部后台管理平台，用于壁纸小程序的内容管理、用户数据统计和权限控制。",
    role: "负责前端基础架构、后台页面搭建、权限模块、内容管理模块、接口封装和上传异常处理。",
    techStack: ["Vue 3", "Element Plus", "Vue Router", "Pinia", "Axios", "Vite"],
    highlights: [
      "使用 Vite 搭建项目基础架构，配置路由、状态管理和页面模块划分。",
      "实现动态路由，根据用户角色生成菜单，并封装 v-permission 指令实现按钮级权限控制。",
      "封装 Axios 实例，配置请求和响应拦截器，处理 Token 添加、统一错误提示和 Token 刷新。",
      "完成内容管理模块 CRUD，覆盖表单校验、分页加载、搜索筛选等后台高频流程。",
      "实现图片上传功能，处理文件大小、格式校验，并模拟网络中断、上传失败等异常场景。",
      "采用路由懒加载、骨架屏等方案优化首屏加载速度。",
    ],
    links: [
      { label: "项目说明", url: "https://github.com/67-luck" },
      { label: "GitHub", url: "https://github.com/67-luck" },
    ],
  },
  {
    id: "portfolio-ai-blog",
    name: "个人博客（AI 全栈项目）",
    period: "2025/01 - 至今",
    type: "个人项目",
    summary:
      "基于 Vue3 + Node.js 开发的全栈个人博客系统，支持技术笔记分享、项目经验展示，并内置 AI 助手用于文章总结、内容检索和对话互动。",
    role: "独立完成项目架构设计、前端页面、Node.js 服务、AI API 对接、音乐播放器和 Vercel 部署。",
    techStack: [
      "Vue 3",
      "Vite",
      "Inspira UI",
      "Vue Router",
      "Pinia",
      "Node.js",
      "Express",
      "AI API",
      "Vercel",
    ],
    highlights: [
      "采用前后端分离模式搭建项目，前端部署于 Vercel，后端服务预留云端部署能力。",
      "实现文章管理、Markdown 编辑与渲染，支持笔记发布、分类展示和外链跳转。",
      "开发 AI 助手模块，对接大语言模型 API，实现流式对话和打字机效果。",
      "支持文章智能总结、内容检索和问答互动，体现 AI 能力在博客场景中的落地。",
      "实现音乐播放器、歌单切换、歌曲选择和全局播放状态同步。",
      "实现黑白夜间模式切换、首页实时时钟与系统运行时长展示。",
    ],
    links: [
      { label: "在线博客", url: "https://67-lucks-projects.vercel.app/blog" },
      { label: "源码仓库", url: "https://github.com/67-luck" },
    ],
  },
  {
    id: "frontend-notes",
    name: "前端学习笔记沉淀",
    period: "持续维护",
    type: "学习沉淀",
    summary:
      "围绕 Vue、JavaScript、Node.js、Axios、Webpack、工程化和项目复盘整理的学习笔记入口，用于沉淀前端基础和项目经验。",
    role: "负责知识分类、笔记整理、外链组织和站内导航整合。",
    techStack: ["Vue", "JavaScript", "Node.js", "Axios", "Webpack", "Markdown"],
    highlights: [
      "按技术栈维度整理知识入口，降低复习和面试准备时的查找成本。",
      "将项目经验与学习笔记关联，方便讲清技术选型、难点和优化方向。",
      "持续记录问题解决过程，包括接口联调、权限控制、部署和性能优化。",
    ],
    links: [
      { label: "语雀主页", url: "https://www.yuque.com/" },
      { label: "GitHub", url: "https://github.com/67-luck" },
    ],
  },
];

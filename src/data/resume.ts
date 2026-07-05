export interface HighlightItem {
  label: string;
  value: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const aboutData = {
  name: "王浩",
  role: "前端开发实习生",
  status: "随时到岗",
  location: "",
  summary:
    "计算机科学与技术专业在读，具备 6 个月前端实习经验。熟悉 Vue3、UniApp、小程序开发、后台管理系统、Axios 封装、权限控制与 Vercel 部署，能独立完成页面开发、接口联调和项目上线。",
  bio: [
    "我目前就读于重庆移通学院计算机科学与技术专业，求职方向为前端开发实习。过去的实习和项目主要集中在小程序、后台管理系统和个人博客全栈实践。",
    "在福州仓山五米信息技术有限公司实习期间，我参与公司核心小程序项目的迭代开发与维护，也负责内部后台管理系统的页面搭建、功能开发和交互优化。",
    "我更关注项目能否真实落地：例如接口数据如何稳定展示、权限如何控制、图片上传和加载如何处理、首屏加载如何优化，以及 AI 能力如何接入到实际产品体验中。",
  ],
  highlights: [
    { label: "实习经验", value: "6 个月前端开发实习" },
    { label: "核心方向", value: "Vue3 / UniApp / 小程序 / 后台管理" },
    { label: "项目经历", value: "上线壁纸小程序、后台系统、AI 全栈博客" },
    { label: "到岗状态", value: "随时到岗，可提供项目讲解" },
  ] satisfies HighlightItem[],
  skillGroups: [
    {
      title: "前端基础",
      items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "响应式布局"],
    },
    {
      title: "Vue 生态",
      items: ["Vue 3", "Vue Router", "Pinia", "Vite", "Element Plus"],
    },
    {
      title: "跨端与小程序",
      items: ["UniApp", "微信小程序", "Vant UI", "图片下载", "分享能力"],
    },
    {
      title: "工程与服务",
      items: ["Axios", "Node.js", "Express", "AI API", "Vercel 部署"],
    },
  ] satisfies SkillGroup[],
  strengths: [
    "有真实企业实习经历，参与过已上线小程序和内部后台系统开发。",
    "熟悉后台管理系统常见模块：动态路由、按钮级权限、表单校验、分页搜索、CRUD、图片上传。",
    "熟悉 Axios 请求封装、Token 处理、统一错误提示、跨域代理和接口联调流程。",
    "有 AI API 对接经验，能够实现流式对话、文章总结、内容检索和问答互动。",
    "能独立完成 Vite 项目搭建、前端部署、页面实现和功能复盘。",
  ],
  workStyle: [
    "先保证功能闭环，再优化组件复用和交互体验。",
    "开发时重视接口状态、异常提示、权限边界和用户操作反馈。",
    "习惯通过博客和项目文档沉淀学习内容，方便复盘和面试讲解。",
  ],
  contact: {
    phone: "17376812873",
    email: "2115759892@qq.com",
    github: "https://github.com/67-luck",
    blog: "https://67-lucks-projects.vercel.app/blog",
    yuque: "https://www.yuque.com/",
  },
};

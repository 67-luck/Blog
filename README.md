# Blog

## Development

```bash
npm run dev
```

本地开发时，Vite 会直接处理 `/api/assistant`，不需要额外起后端服务。

## AI Summary

博客详情页和悬浮 AI 助手都会调用 `/api/assistant`，服务端按 OpenAI 兼容接口转发请求。
如果粘贴公开语雀链接，服务端会先抓取正文，再把提取结果发给大模型总结。

推荐配置：

- `AI_API_BASE_URL`
- `AI_API_KEY`
- `AI_MODEL`
- `DEEPSEEK_API_KEY`
- `VITE_LONGCAT_BASE_URL`
- `VITE_LONGCAT_API_KEY`
- `VITE_LONGCAT_MODEL`

兼容当前服务端摘要接口的环境变量：

- `LONGCAT_API_KEY`
- `AI_API_KEY`

可选环境变量：

- `LONGCAT_MODEL`
- `AI_MODEL`
- `LONGCAT_API_BASE_URL`
- `AI_API_BASE_URL`
- `DEEPSEEK_API_BASE_URL`
- `DEEPSEEK_MODEL`

默认主模型是 `Qwen/Qwen3.6-35B-A3B`，默认主基地址是 `https://api.siliconflow.cn`。
如果配置了 `DEEPSEEK_API_KEY`，服务端会在主模型失败、空返回或流式无内容时自动切到 DeepSeek，默认兜底模型是 `deepseek-chat`。

# Blog

## Development

```bash
npm run dev
```

本地开发时，Vite 会直接处理 `/api/assistant`，不需要额外起后端服务。

## AI Summary

博客详情页支持调用大模型总结当前文章，默认按 LongCat 的 OpenAI 兼容接口发起请求。
如果粘贴公开语雀链接，服务端会先抓取正文，再把提取结果发给 LongCat 总结。

推荐配置：

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

默认模型是 `LongCat-Flash-Chat`，默认基地址是 `https://api.longcat.chat/openai`。

import type { IncomingMessage, ServerResponse } from "node:http";
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import assistantHandler from "./api/assistant.ts";

function readRequestBody(req: IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = [];

    req.on("data", (chunk) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks).toString("utf8"));
    });

    req.on("error", reject);
  });
}

function createJsonResponse(res: ServerResponse) {
  let statusCode = 200;

  return {
    status(code: number) {
      statusCode = code;
      return this;
    },
    json(payload: unknown) {
      res.statusCode = statusCode;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(payload));
    },
    setHeader(name: string, value: string) {
      res.setHeader(name, value);
    },
    write(chunk: string) {
      res.write(chunk);
    },
    end(chunk?: string) {
      res.end(chunk);
    },
  };
}

function localAssistantApiPlugin() {
  return {
    name: "local-assistant-api",
    configureServer(server: {
      middlewares: {
        use(handler: (req: IncomingMessage, res: ServerResponse, next: () => void) => void): void;
      };
    }) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/assistant")) {
          next();
          return;
        }

        try {
          const rawBody = await readRequestBody(req);

          await assistantHandler(
            {
              method: req.method,
              body: rawBody,
            },
            createJsonResponse(res),
          );
        } catch (error) {
          console.error(error);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(
            JSON.stringify({
              error: "本地开发接口调用失败。",
              code: "dev_server_error",
            }),
          );
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [vue(), tailwindcss(), localAssistantApiPlugin()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});

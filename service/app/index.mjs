import Koa from "koa";
import cors from "@koa/cors";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";

import { authRouter } from "./routes/auth/index.mjs";
import { perfilRouter } from "./routes/perfis/index.mjs";
import { pessoaRouter } from "./routes/pessoas/index.mjs";
import { setorRouter } from "./routes/setores/index.mjs";
import { varaRouter } from "./routes/varas/index.mjs";
import { gabinetesRouter } from "./routes/gabinetes/index.mjs";
import { lotacoesRouter } from "./routes/lotacoes/index.mjs";

export const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(authRouter.routes()).use(authRouter.allowedMethods());
app.use(perfilRouter.routes()).use(perfilRouter.allowedMethods());
app.use(pessoaRouter.routes()).use(pessoaRouter.allowedMethods());
app.use(setorRouter.routes()).use(setorRouter.allowedMethods());
app.use(varaRouter.routes()).use(varaRouter.allowedMethods());
app.use(gabinetesRouter.routes()).use(gabinetesRouter.allowedMethods());
app.use(lotacoesRouter.routes()).use(lotacoesRouter.allowedMethods());

const status = new Router();
status.get("/status", async (ctx) => (ctx.body = "online"));
app.use(status.routes()).use(status.allowedMethods());

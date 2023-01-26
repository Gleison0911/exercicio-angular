import Router from "@koa/router";

import { database } from "../../configs/database.mjs";

export const listLotacoes = (q) =>
  database("lotacoes").select().whereLike("pessoas_id", `%${q}%`);

export const findLotacoes = (id) =>
  database("lotacoes").select().where({ id }).first();

export const insertLotacoes = (lotacaoo) =>
  database("lotacoes").insert(lotacaoo);

export const updateLotacoes = (id, lotacaoo) =>
  database("lotacoes").update(lotacaoo).where({ id });

export const deleteLotacoes = (id) => database("lotacoes").del().where({ id });

export const lotacoesRouter = new Router();

lotacoesRouter.get(
  "/lotacoes",
  async (ctx) => (ctx.body = await listLotacoes(ctx.query.q || ""))
);

lotacoesRouter.get(
  "/lotacoes/:id",
  async (ctx) =>
    (ctx.body =
      (await findLotacoes(ctx.params.id)) || ctx.throw(404, "NOT_FOUND"))
);

lotacoesRouter.post(
  "/lotacoes",
  async (ctx) => (ctx.body = await insertLotacoes(ctx.request.body))
);

lotacoesRouter.put(
  "/lotacoes/:id",
  async (ctx) =>
    (ctx.body = await updateLotacoes(ctx.params.id, ctx.request.body))
);

lotacoesRouter.del(
  "/lotacoes/:id",
  async (ctx) => (ctx.body = await deleteLotacoes(ctx.params.id))
);

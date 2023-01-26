import Router from "@koa/router";

import { database } from "../../configs/database.mjs";

export const listSetores = (q) =>
  database("setores").select().whereLike("nome", `%${q}%`);

export const findSetores = (id) =>
  database("setores").select().where({ id }).first();

export const insertSetores = (setor) => database("setores").insert(setor);

export const updateSetores = (id, setores) =>
  database("setores").update(setores).where({ id });

export const deleteSetores = (id) => database("setores").del().where({ id });

export const setorRouter = new Router();

setorRouter.get(
  "/setores",
  async (ctx) => (ctx.body = await listSetores(ctx.query.q || ""))
);

setorRouter.get(
  "/setores",
  async (ctx) => (ctx.body = await listSetores(ctx.query.q || ""))
);

setorRouter.get(
  "/setores/:id",
  async (ctx) =>
    (ctx.body =
      (await findSetores(ctx.params.id)) || ctx.throw(404, "NOT_FOUND"))
);

setorRouter.post(
  "/setores",
  async (ctx) => (ctx.body = await insertSetores(ctx.request.body))
);

setorRouter.put(
  "/setores/:id",
  async (ctx) =>
    (ctx.body = await updateSetores(ctx.params.id, ctx.request.body))
);

setorRouter.del(
  "/setores/:id",
  async (ctx) => (ctx.body = await deleteSetores(ctx.params.id))
);

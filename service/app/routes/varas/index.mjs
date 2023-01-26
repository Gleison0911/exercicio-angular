import Router from "@koa/router";

import { database } from "../../configs/database.mjs";

export const listVaras = (q) =>
  database("varas").select().whereLike("setores_id", `%${q}%`);

export const findVara = (id) =>
  database("varas").select().where({ id }).first();

export const insertVara = (vara) => database("varas").insert(vara);

export const updateVara = (id, vara) =>
  database("varas").update(vara).where({ id });

export const deleteVara = (id) => database("varas").del().where({ id });

export const varaRouter = new Router();

varaRouter.get(
  "/varas",
  async (ctx) => (ctx.body = await listVaras(ctx.query.q || ""))
);

varaRouter.get(
  "/varas/:id",
  async (ctx) =>
    (ctx.body = (await findVara(ctx.params.id)) || ctx.throw(404, "NOT_FOUND"))
);

varaRouter.post(
  "/varas",
  async (ctx) => (ctx.body = await insertVara(ctx.request.body))
);

varaRouter.put(
  "/varas/:id",
  async (ctx) => (ctx.body = await updateVara(ctx.params.id, ctx.request.body))
);

varaRouter.del(
  "/varas/:id",
  async (ctx) => (ctx.body = await deleteVara(ctx.params.id))
);

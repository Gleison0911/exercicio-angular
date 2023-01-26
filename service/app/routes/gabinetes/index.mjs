import Router from "@koa/router";

import { database } from "../../configs/database.mjs";

export const listGabinetes = (q) =>
  database("gabinetes").select().whereLike("nome", `%${q}%`);

export const findGabinete = (id) =>
  database("gabinetes").select().where({ id }).first();

export const insertGabinete = (gabinete) =>
  database("gabinetes").insert(gabinete);

export const updateGabinete = (id, gabinete) =>
  database("gabinetes").update(gabinete).where({ id });

export const deleteGabinete = (id) => database("gabinetes").del().where({ id });

export const gabinetesRouter = new Router();

gabinetesRouter.get(
  "/gabinetes",
  async (ctx) => (ctx.body = await listGabinetes(ctx.query.q || ""))
);

gabinetesRouter.get(
  "/gabinetes/:id",
  async (ctx) =>
    (ctx.body =
      (await findGabinete(ctx.params.id)) || ctx.throw(404, "NOT_FOUND"))
);

gabinetesRouter.post(
  "/gabinetes",
  async (ctx) => (ctx.body = await insertGabinete(ctx.request.body))
);

gabinetesRouter.put(
  "/gabinetes/:id",
  async (ctx) =>
    (ctx.body = await updateGabinete(ctx.params.id, ctx.request.body))
);

gabinetesRouter.del(
  "/gabinetes/:id",
  async (ctx) => (ctx.body = await deleteGabinete(ctx.params.id))
);

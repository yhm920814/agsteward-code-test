import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getAll, getById } from "@/server/api/getAll";

export const farmerRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => getAll()),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => getById(input.id)),
});

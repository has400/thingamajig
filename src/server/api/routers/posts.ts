
import { createTRPCRouter, publicProcedure } from "npm/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return ctx.prisma.post.findMany();
  }),
});

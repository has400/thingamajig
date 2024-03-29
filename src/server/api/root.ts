import { createTRPCRouter } from "npm/server/api/trpc";
import { postRouter } from "./routers/posts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  posts: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

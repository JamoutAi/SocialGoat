import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          company: z.string().optional(),
          email: z.string().email(),
          phone: z.string().optional(),
          projectType: z.string().optional(),
          budget: z.string().optional(),
          timeline: z.string().optional(),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        const lines = [
          `**From:** ${input.name}${input.company ? ` — ${input.company}` : ""}`,
          `**Email:** ${input.email}`,
          input.phone ? `**Phone:** ${input.phone}` : null,
          input.projectType ? `**Project Type:** ${input.projectType}` : null,
          input.budget ? `**Budget:** ${input.budget}` : null,
          input.timeline ? `**Timeline:** ${input.timeline}` : null,
          ``,
          `**Message:**`,
          input.message,
        ]
          .filter((l) => l !== null)
          .join("\n");

        await notifyOwner({
          title: `New Project Inquiry from ${input.name}${input.company ? ` (${input.company})` : ""}`,
          content: lines,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;

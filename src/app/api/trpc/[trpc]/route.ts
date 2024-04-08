import { appRouter } from "@/server/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: function (): object | Promise<object> {
      return {};
    },
  });

export { handler as GET, handler as POST };

import "server-only";

import { appRouter } from "./api";

export const serverTrpc = appRouter.createCaller({});

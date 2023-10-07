import 'server-only';

import { appRouter } from './api';
import { createContext } from './api/context';

export const serverTrpc = appRouter.createCaller(await createContext());

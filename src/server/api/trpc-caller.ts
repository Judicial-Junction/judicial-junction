import 'server-only';

import { appRouter } from '.';
import { createContext } from './context';

export const serverTrpc = appRouter.createCaller(await createContext());

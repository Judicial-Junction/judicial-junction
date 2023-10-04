import { initTRPC } from '@trpc/server';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/config/auth';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const authorizedProcedure = publicProcedure
    .use(async (opts)=>{
        
        return opts.next();
    })
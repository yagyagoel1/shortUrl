import {PrismaClient} from '@prisma/client';


const prismaClientSingleton = ()=>{
    return new PrismaClient();
}

//eslint-disable-next-line import/no-default-export
const globalPrisma = globalThis as unknown as {prisma: PrismaClient|undefined};
if(!globalPrisma.prisma){
   globalPrisma.prisma = prismaClientSingleton();
}


export default globalPrisma.prisma


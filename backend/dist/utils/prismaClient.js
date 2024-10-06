"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prismaClientSingleton = () => {
    return new client_1.PrismaClient();
};
//eslint-disable-next-line import/no-default-export
const globalPrisma = globalThis;
if (!globalPrisma.prisma) {
    globalPrisma.prisma = prismaClientSingleton();
}
exports.default = globalPrisma.prisma;

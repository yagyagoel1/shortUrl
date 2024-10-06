import prismaClient from "../utils/prismaClient";


export const connectDB = async()=>{
    try{
        if(prismaClient){
        await prismaClient.$connect();
        console.log("connected to database")
        }
        else 
        throw Error("prismaClient doesnt exist")
    }
    catch(err){
        console.error("error connecting to database",err)
    }
}
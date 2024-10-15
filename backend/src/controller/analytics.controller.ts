import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import prismaClient from "../utils/prismaClient";
import { ApiResponse } from "../utils/apiResponse";





const getAnalytics =  asyncHandler(async(req:Request,res:Response)=>{
    let shortUrl= req.query.shortUrl as string
    
    if(!shortUrl)
        return res.status(400).json({message:"shortUrl is required"})
    shortUrl = shortUrl.substring(shortUrl.lastIndexOf("/")+1,shortUrl.length)
    const feedback = await prismaClient?.url.findFirst({
        where:{
            shortUrl:String(shortUrl)
        }
});
    if(!feedback)
        return res.status(400).json({message:"url not found"})
    const clicks = await prismaClient?.clicksInfo.findMany({
        where:{
            urlId:feedback.id
        }
    })
    if(!clicks)
        return res.status(400).json({message:"no clicks found"})
    return res.status(200).json(new ApiResponse(200,"clicks found",{clicks}))
});

export {getAnalytics}
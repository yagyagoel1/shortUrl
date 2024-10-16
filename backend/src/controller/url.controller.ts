import { asyncHandler } from "../utils/asyncHandler";
import ShortUniqueId from "short-unique-id";
import prismaClient from "../utils/prismaClient"
import { ApiResponse } from "../utils/apiResponse";
import { Request, Response } from "express";


const createUrl:ReturnType<typeof asyncHandler>   = asyncHandler(async(req:Request,res:Response)=>{
    const {url} = req.body
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9._~:/?#[@\]!$&'()*+,;=-]*)?$/;

    if(!urlPattern.test(url)){
        return res.status(400).json(new ApiResponse(400,"url is not valid"))
    }
    if(!url){
       return res.status(400).json(new ApiResponse(400,"url is required"))
    }
    let shortId:string;
    while(true){
    const {randomUUID} = new ShortUniqueId({length:4})
    const id = randomUUID()
    const feedback = await  prismaClient?.url.findFirst({
        where:{
            shortUrl:String(id)
        }
    })
    if(!feedback){
        shortId  = String(id)
        break;
    }}
    const feedback =  await prismaClient?.url.create({
        data:{
            url:url,
            shortUrl:shortId,
        }
    })
    if(!feedback){
        console.error("error")
        return res.status(400).json(new ApiResponse(400,"there was some problem creating the short url"))
    }
    return res.status(200).json(new ApiResponse(200,"url was created successfully",{shortUrl : `${process.env.DOMAIN}/${shortId}` ,url:url}))

})
const getUrl:ReturnType<typeof asyncHandler> = asyncHandler(async(req:Request,res:Response)=>{
    const shortUrl = req.params.id

    if(!shortUrl)
        return res.status(400).json(new ApiResponse(400,"shortUrl is required"))
    const ip  = req.ip
    const feedback = await prismaClient?.url.findFirst({
        where:{
            shortUrl
        }
    })
    if(!feedback){
        return res.status(400).json(new ApiResponse(400,"url not found"))
    }
    const createNewView = await prismaClient?.clicksInfo.create({
        data: {
            ViewIp: ip,
            urlId: feedback.id  // Link the new click to the found URL
        },
    });
    if (!createNewView)
        return res.status(400).json(new ApiResponse(400,"there was some problem creating the click"))
    // return res.redirect(feedback.url)
    if (!feedback.url.match(/^[a-zA-Z]+:\/\//))
        feedback.url = 'https://' + feedback.url;
    return res.redirect(feedback.url)
});
export {createUrl,getUrl}  
    

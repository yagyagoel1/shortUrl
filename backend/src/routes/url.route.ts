import { Router } from "express";
import { createUrl } from "../controller/url.controller";



const router:ReturnType<typeof Router> = Router()

router.route("/url/create").post(createUrl)


export default router



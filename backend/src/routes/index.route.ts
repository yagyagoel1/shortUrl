import { Router } from "express";
import { getUrl } from "../controller/url.controller";
import urlRoutes from "./url.route";




const router:ReturnType<typeof Router>  = Router()

router.get("/:id",getUrl)
router.use("/api/v1/",urlRoutes)

export default router

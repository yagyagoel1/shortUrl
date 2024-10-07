import { Router } from "express";
import { getUrl } from "../controller/url.controller";
import urlRoutes from "./url.route";
import analyticsRoutes from "./analytics.route";




const router:ReturnType<typeof Router>  = Router()

router.get("/:id",getUrl)
router.use("/api/v1/",urlRoutes)
router.use("/api/v1/analytics",analyticsRoutes)

export default router

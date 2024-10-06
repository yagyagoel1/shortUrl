import { Router } from "express";
import { createUrl } from "../controller/url.controller";
const router = Router();
router.route("/url/create").post(createUrl);
export default router;

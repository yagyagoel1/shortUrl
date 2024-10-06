import express from 'express';
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import cookieParser from "cookie-parser";
import helmet from "helmet";
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
const app = express();
app.use(limiter);
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.disable("x-powered-by");
app.use(cookieParser());
app.get("/healthcheck", (_, res) => {
    res.status(200).json(new ApiResponse(200, "is Healthy"));
});
import mainRouter from "./routes/index.route";
import { ApiResponse } from "./utils/apiResponse";
// import { middleware } from "./middlewares/prometheus.middleware";
app.use("/", mainRouter);
export default app;

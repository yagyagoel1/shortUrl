"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = require("express-rate-limit");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
const app = (0, express_1.default)();
app.use(limiter);
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.disable("x-powered-by");
app.use((0, cookie_parser_1.default)());
app.get("/healthcheck", (_, res) => {
    res.status(200).json(new apiResponse_1.ApiResponse(200, "is Healthy"));
});
const index_route_1 = __importDefault(require("./routes/index.route"));
const apiResponse_1 = require("./utils/apiResponse");
// import { middleware } from "./middlewares/prometheus.middleware";
app.use("/", index_route_1.default);
exports.default = app;

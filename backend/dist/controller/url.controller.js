"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = exports.createUrl = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const short_unique_id_1 = __importDefault(require("short-unique-id"));
const prismaClient_1 = __importDefault(require("../utils/prismaClient"));
const apiResponse_1 = require("../utils/apiResponse");
const createUrl = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.body;
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9._~:/?#[@\]!$&'()*+,;=-]*)?$/;
    if (!urlPattern.test(url)) {
        res.status(400).json(new apiResponse_1.ApiResponse(400, "url is not valid"));
    }
    if (!url) {
        res.status(400).json(new apiResponse_1.ApiResponse(400, "url is required"));
    }
    let shortId;
    while (true) {
        const { randomUUID } = new short_unique_id_1.default({ length: 4 });
        const feedback = yield (prismaClient_1.default === null || prismaClient_1.default === void 0 ? void 0 : prismaClient_1.default.url.findFirst({
            where: {
                shortUrl: String(randomUUID)
            }
        }));
        if (!feedback) {
            shortId = String(randomUUID);
            break;
        }
    }
    const feedback = yield (prismaClient_1.default === null || prismaClient_1.default === void 0 ? void 0 : prismaClient_1.default.url.create({
        data: {
            url: url,
            shortUrl: shortId,
        }
    }));
    if (!feedback)
        return res.status(400).json(new apiResponse_1.ApiResponse(400, "there was some problem creating the short url"));
    return res.status(200).json(new apiResponse_1.ApiResponse(200, "url was created successfully", { shortUrl: `${process.env.DOMAIN}/${shortId}`, url: url }));
}));
exports.createUrl = createUrl;
const getUrl = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortUrl } = req.params;
    if (!shortUrl)
        return res.status(400).json(new apiResponse_1.ApiResponse(400, "shortUrl is required"));
    const ip = req.ip;
    if (!ip)
        return res.status(400).json(new apiResponse_1.ApiResponse(400, "ip is required"));
    const feedback = yield (prismaClient_1.default === null || prismaClient_1.default === void 0 ? void 0 : prismaClient_1.default.url.findFirst({
        where: {
            shortUrl
        }
    }));
    if (!feedback)
        return res.status(400).json(new apiResponse_1.ApiResponse(400, "url not found"));
    const createNewView = yield (prismaClient_1.default === null || prismaClient_1.default === void 0 ? void 0 : prismaClient_1.default.clicksInfo.create({
        data: {
            ViewIp: ip,
            urlId: feedback.id // Link the new click to the found URL
        },
    }));
    if (!createNewView)
        return res.status(400).json(new apiResponse_1.ApiResponse(400, "there was some problem creating the click"));
    return res.redirect(feedback.url);
}));
exports.getUrl = getUrl;

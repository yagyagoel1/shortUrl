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
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
const apiResponse_1 = require("./apiResponse");
const asyncHandler = (requestHandler) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield requestHandler(req, res, next);
        }
        catch (error) {
            console.error("error in asyncHandler", error);
            res.status(500).json(new apiResponse_1.ApiResponse(500, "oops something went wrong"));
        }
    });
};
exports.asyncHandler = asyncHandler;
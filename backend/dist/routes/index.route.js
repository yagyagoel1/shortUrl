"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_controller_1 = require("../controller/url.controller");
const url_route_1 = __importDefault(require("./url.route"));
const router = (0, express_1.Router)();
router.get("/:id", url_controller_1.getUrl);
router.use("/api/v1/", url_route_1.default);
exports.default = router;

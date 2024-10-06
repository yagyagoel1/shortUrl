"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_controller_1 = require("../controller/url.controller");
const router = (0, express_1.Router)();
router.route("/url/create").post(url_controller_1.createUrl);
exports.default = router;

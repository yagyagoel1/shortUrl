"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
dotenv_1.default.config({
    path: "./../.env"
});
(0, db_1.connectDB)().then(() => {
    try {
        app_1.default.on("error", (error) => {
            throw error;
        });
        app_1.default.listen(process.env.PORT, () => {
            console.log("listening on port ", process.env.PORT);
        });
    }
    catch (err) {
        console.error("error starting server", err);
    }
}).catch((err) => {
    console.error("error connecting to database", err);
});

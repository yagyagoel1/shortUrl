"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(status, message, data = {}) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.success = status < 400;
    }
}
exports.ApiResponse = ApiResponse;

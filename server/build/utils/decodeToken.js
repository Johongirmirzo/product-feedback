"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const decodedToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, `${process.env.TOKEN_PRIVATE_KEY}`);
        return { valid: true, expired: false, decoded };
    }
    catch (err) {
        return {
            valid: false,
            expired: err.message === "jwt expired",
            decoded: null
        };
    }
};
exports.decodedToken = decodedToken;

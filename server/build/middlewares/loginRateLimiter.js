"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserRateLimiter = exports.adminLoginRateLimiter = exports.userLoginRateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.userLoginRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 10,
    message: 'Too many login attempts. please try again after an hour!',
    standardHeaders: true,
    legacyHeaders: false,
});
exports.adminLoginRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts. please try again after an hour!',
    standardHeaders: true,
    legacyHeaders: false,
});
exports.registerUserRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000 * 24,
    max: 2,
    message: "You've reached max account limit of 2. Try again after 24 hours!",
    standardHeaders: true,
    legacyHeaders: false,
});

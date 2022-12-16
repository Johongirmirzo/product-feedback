"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeData = void 0;
const escape_html_1 = __importDefault(require("escape-html"));
const sanitizeData = (data) => {
    return (0, escape_html_1.default)(data);
};
exports.sanitizeData = sanitizeData;

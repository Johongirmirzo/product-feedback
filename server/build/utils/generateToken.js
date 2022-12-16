"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = ({ id, username, expiresIn }) => {
    console.log("Generating tsoken", { id, username, expiresIn });
    return jsonwebtoken_1.default.sign({ id, username }, `${process.env.TOKEN_PRIVATE_KEY}`, { expiresIn: expiresIn });
};
exports.generateToken = generateToken;

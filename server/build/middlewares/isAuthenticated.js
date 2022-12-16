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
exports.validateUserToken = void 0;
const reissueAccessToken_1 = require("../utils/reissueAccessToken");
const User_1 = __importDefault(require("../models/User"));
const decodeToken_1 = require("../utils/decodeToken");
const validateUserToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const accessToken = authHeader.split(" ")[1];
        const refreshToken = req.headers.refreshtoken ? req.headers.refreshtoken.split(" ")[1] : "";
        if (accessToken) {
            console.log({ accessToken, refreshToken });
            const { decoded, expired } = (0, decodeToken_1.decodedToken)(accessToken);
            console.log(expired && refreshToken);
            if (decoded) {
                const user = yield User_1.default.findById(decoded.id);
                req.user = user;
                req.userData = decoded;
                console.log("Decoded token::::", decoded, expired, refreshToken);
                console.log(req.user);
                return next();
            }
            if (expired && refreshToken) {
                console.log("Expired refreshToken::::", expired, refreshToken);
                const accessToken = (0, reissueAccessToken_1.reissueAccessToken)(refreshToken);
                if (accessToken) {
                    res.setHeader("access-token", accessToken);
                    const { decoded } = (0, decodeToken_1.decodedToken)(accessToken);
                    const user = yield User_1.default.findById(decoded.id);
                    req.user = user;
                    req.userData = decoded;
                    return next();
                }
                else {
                    res.status(401).send({ isLoginRequired: true, message: "You need to login to access the app" });
                }
            }
            else {
                console.log("Decoded token", decoded, expired);
                res.status(401).send({ isLoginRequired: true, message: "Invalid/Expired Token" });
            }
        }
        else {
            res.status(401).send({ isLoginRequired: true, message: "Access Token 'Bearer [token]' is missing" });
        }
    }
    else {
        res.status(401).send({ isLoginRequired: true, message: "Authentication Header is missing" });
    }
});
exports.validateUserToken = validateUserToken;

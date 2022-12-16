"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reissueAccessToken = void 0;
const decodeToken_1 = require("./decodeToken");
const generateToken_1 = require("./generateToken");
const reissueAccessToken = (token) => {
    const { decoded } = (0, decodeToken_1.decodedToken)(token);
    if (!decoded) {
        return false;
    }
    console.log(`${process.env.ACCESS_TOKEN_EXPIRATION_TIME}`);
    const accessToken = (0, generateToken_1.generateToken)({ id: decoded.id, username: decoded.username, expiresIn: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}` });
    return accessToken;
};
exports.reissueAccessToken = reissueAccessToken;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(__dirname, "../public/images"));
    },
    filename: function (req, file, cb) {
        cb(null, (0, uuid_1.v4)() + "-" + file.originalname);
    },
});
exports.uploadImage = (0, multer_1.default)({ storage: storage, limits: { fileSize: 1000000 } });

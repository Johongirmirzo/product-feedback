"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOnlyImage = void 0;
const isOnlyImage = (req, res, next) => {
    const imageTypes = ["webp, jpeg, jpg, png, svg"];
    const fileLength = Number(req.headers["content-length"]);
    if (fileLength > 1000000) {
        return res.status(400).json({ isImageTooLarge: true, message: "Image size is too large! Maximum file size is 1mb" });
    }
    else {
        return next();
    }
};
exports.isOnlyImage = isOnlyImage;

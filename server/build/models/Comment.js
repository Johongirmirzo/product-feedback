"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CommentSchema = new mongoose_1.default.Schema({
    replyingTo: String,
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    isCommentedUserAdmin: Boolean,
    userPhoto: String,
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    feedback: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Feedback"
    },
});
exports.default = mongoose_1.default.model("Comment", CommentSchema);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FeedbackSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    voteAmount: {
        type: Number,
        default: 0
    },
    feedbackVoters: [{
            username: String,
            voteType: String,
            feedback: mongoose_1.default.Schema.Types.ObjectId,
        }],
    comments: [{
            commentId: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "Comment"
            },
            userId: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "User"
            }
        }],
    category: {
        type: String,
        enum: ["FEATURE", "UI", "UX", "BUG", "ENHANCEMENT"],
        default: "FEATURE",
        required: true
    },
    status: {
        type: String,
        enum: ["PLANNED", "IN-PROGRESS", "LIVE"],
        default: "PLANNED"
    }
});
exports.default = mongoose_1.default.model("Feedback", FeedbackSchema);

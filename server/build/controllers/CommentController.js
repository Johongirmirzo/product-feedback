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
exports.CommentController = void 0;
const sanitizeData_1 = require("../utils/sanitizeData");
const Feedback_1 = __importDefault(require("../models/Feedback"));
const Comment_1 = __importDefault(require("../models/Comment"));
exports.CommentController = {
    getAllComments: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const comments = yield Comment_1.default.find();
            res.json(comments);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    createComment: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { feedbackId } = req.params;
            const sanitizedData = {
                description: (0, sanitizeData_1.sanitizeData)(req.body.description),
                username: (0, sanitizeData_1.sanitizeData)(req.body.username),
                user: req.body.user ? req.body.user : req.user._id,
                feedback: feedbackId,
                isCommentedUserAdmin: req.body.isCommentedUserAdmin,
                userPhoto: req.body.userPhoto ? req.body.userPhoto : "",
                replyingTo: req.body.replyingTo ? (0, sanitizeData_1.sanitizeData)(req.body.replyingTo) : "",
            };
            console.log("Create comment data", sanitizedData);
            console.log(req.user);
            const feedback = yield Feedback_1.default.findById(feedbackId);
            const comment = yield Comment_1.default.create(sanitizedData);
            feedback.comments.push({ commentId: comment._id, userId: req.user._id });
            yield feedback.save();
            res.status(201).json({ isSuccess: true, comment });
        }
        catch (err) {
            res.status(400).json({ isSuccess: false, message: err.message });
        }
    }),
    editComment: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { feedbackId, commentId } = req.params;
            const sanitizedData = {
                description: (0, sanitizeData_1.sanitizeData)(req.body.description),
            };
            const comment = yield Comment_1.default.findByIdAndUpdate(commentId, { $set: { description: sanitizedData.description } }, { new: true });
            res.json({ isSuccess: true, comment });
        }
        catch (err) {
            res.status(400).json({ isSuccess: true, message: err.message });
        }
    }),
    deleteComment: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { feedbackId, commentId } = req.params;
            yield Comment_1.default.findByIdAndDelete(commentId);
            yield Feedback_1.default.updateOne({ "comments.commentId": commentId }, { $pull: { comments: { "commentId": commentId } } });
            res.json({ message: "Comment is deleted" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
};

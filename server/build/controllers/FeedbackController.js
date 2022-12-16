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
exports.FeedbackController = void 0;
const sanitizeData_1 = require("../utils/sanitizeData");
const Comment_1 = __importDefault(require("../models/Comment"));
const Feedback_1 = __importDefault(require("../models/Feedback"));
exports.FeedbackController = {
    getAllFeedbacks: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const feedbacks = yield Feedback_1.default.find();
            console.log("Get all feedbacks", req.user);
            res.json(feedbacks.reverse());
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    getFeedback: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { feedbackId } = req.params;
            const feedback = yield Feedback_1.default.findById(feedbackId);
            res.json(feedback);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    createFeedback: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const sanitizedData = {
                title: (0, sanitizeData_1.sanitizeData)(req.body.title),
                description: (0, sanitizeData_1.sanitizeData)(req.body.description),
            };
            const feedback = yield Feedback_1.default.create({
                title: sanitizedData.title,
                description: sanitizedData.description,
                category: req.body.category || "PLANNED",
                user: req.user._id,
            });
            res.status(201).json({ isSuccess: true, feedback });
        }
        catch (err) {
            res.status(400).json({ isSuccess: false, message: err.message });
        }
    }),
    editFeedback: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { feedbackId } = req.params;
            const sanitizedData = {
                title: (0, sanitizeData_1.sanitizeData)(req.body.title),
                description: (0, sanitizeData_1.sanitizeData)(req.body.description),
            };
            const feedback = yield Feedback_1.default.findByIdAndUpdate({ _id: feedbackId }, { $set: {
                    title: sanitizedData.title,
                    description: sanitizedData.description,
                    category: req.body.category || "FEATURE",
                }
            }, { new: true });
            res.json({ isSuccess: true, feedback });
        }
        catch (err) {
            res.status(400).json({ isSuccess: true, message: err.message });
        }
    }),
    deleteFeedback: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { feedbackId } = req.params;
            yield Comment_1.default.deleteMany({ feedback: feedbackId });
            yield Feedback_1.default.findByIdAndDelete(feedbackId);
            res.status(200).json({ message: "Feedback is deleted" });
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    voteFeedback: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { feedbackId } = req.params;
            const { voteType } = req.body;
            const feedback = yield Feedback_1.default.findById(feedbackId);
            const isVotedAlready = feedback.feedbackVoters.some(voter => voter.username === req.user.username);
            if (!isVotedAlready) {
                feedback.feedbackVoters.push({
                    feedback: feedbackId,
                    username: req.user.username,
                    voteType: ""
                });
            }
            feedback.feedbackVoters.forEach(voter => {
                if (req.user.username === voter.username) {
                    if (voter.voteType !== voteType && voteType === "increment") {
                        feedback.voteAmount += 1;
                        console.log("Voter >>>", req.user.username, voter.username, feedback.voteAmount);
                        voter.voteType = "increment";
                        return;
                    }
                    if (voter.voteType !== voteType && voteType === "decrement") {
                        feedback.voteAmount -= 1;
                        voter.voteType = "decrement";
                        console.log("Voter >>>", req.user.username, voter.username, feedback.voteAmount);
                        return;
                    }
                }
            });
            yield feedback.save();
            return res.json(feedback);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }),
    changeStatus: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { feedbackId } = req.params;
            const { status } = req.body;
            if (req.user.isAdmin) {
                const feedback = yield Feedback_1.default.findById(feedbackId);
                feedback.status = status;
                yield feedback.save();
                res.json({ isSuccess: true, message: `Feedback status changed to ${status}` });
            }
            else {
                res.status(403).json({ message: "You are not admin!. You can't perform this action" });
            }
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
};

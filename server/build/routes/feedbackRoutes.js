"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FeedbackController_1 = require("../controllers/FeedbackController");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const validators_1 = require("../middlewares/validators");
const router = (0, express_1.Router)();
router.get("/", isAuthenticated_1.validateUserToken, FeedbackController_1.FeedbackController.getAllFeedbacks);
router.get("/:feedbackId", isAuthenticated_1.validateUserToken, FeedbackController_1.FeedbackController.getFeedback);
router.post("/createFeedback", validators_1.feedbackValidator, isAuthenticated_1.validateUserToken, FeedbackController_1.FeedbackController.createFeedback);
router.put("/:feedbackId", validators_1.feedbackValidator, isAuthenticated_1.validateUserToken, FeedbackController_1.FeedbackController.editFeedback);
router.delete("/:feedbackId", isAuthenticated_1.validateUserToken, FeedbackController_1.FeedbackController.deleteFeedback);
router.post("/voteFeedback/:feedbackId", isAuthenticated_1.validateUserToken, FeedbackController_1.FeedbackController.voteFeedback);
router.post("/changeStatus/:feedbackId", isAuthenticated_1.validateUserToken, FeedbackController_1.FeedbackController.changeStatus);
exports.default = router;

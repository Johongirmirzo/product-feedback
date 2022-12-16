"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const loginRateLimiter_1 = require("../middlewares/loginRateLimiter");
const isOnlyImage_1 = require("../middlewares/isOnlyImage");
const UserController_1 = require("../controllers/UserController");
const validators_1 = require("../middlewares/validators");
const uploadImage_1 = require("../middlewares/uploadImage");
const router = (0, express_1.Router)();
// user auth
router.get("/loginFailed", UserController_1.UserController.loginFailed);
router.post("/login", validators_1.loginValidator, loginRateLimiter_1.userLoginRateLimiter, passport_1.default.authenticate("local"), UserController_1.UserController.loginUser);
router.post("/register", validators_1.registerValidator, loginRateLimiter_1.registerUserRateLimiter, UserController_1.UserController.registerUser);
router.delete("/logout", UserController_1.UserController.logoutUser);
// admin auth
router.post("/admin/login", validators_1.loginValidator, loginRateLimiter_1.adminLoginRateLimiter, passport_1.default.authenticate("local"), UserController_1.UserController.loginUser);
// Update user credentials
router.post("/changeEmail", isAuthenticated_1.validateUserToken, UserController_1.UserController.changeEmail);
router.post("/changeUsername", isAuthenticated_1.validateUserToken, UserController_1.UserController.changeUsername);
router.post("/changePassword", isAuthenticated_1.validateUserToken, UserController_1.UserController.changePassword);
router.post("/changeProfilePicture/:userId", isAuthenticated_1.validateUserToken, isOnlyImage_1.isOnlyImage, uploadImage_1.uploadImage.single("avatar"), UserController_1.UserController.updateProfilePicture);
// Delete account
router.delete("/deleteAccount/:userId", isAuthenticated_1.validateUserToken, UserController_1.UserController.deleteAccount);
// 3rd party authentication
router.get('/google', loginRateLimiter_1.userLoginRateLimiter, passport_1.default.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/google/callback', passport_1.default.authenticate('google', {
    failureRedirect: "/login/failed",
}), UserController_1.UserController.loginThirdParty);
router.get('/linkedin', loginRateLimiter_1.userLoginRateLimiter, passport_1.default.authenticate('linkedin', { state: 'SOME STATE' }));
router.get('/linkedin/callback', (req, res, next) => {
    passport_1.default.authenticate('linkedin', (err, user, info) => {
        if (err || !user) {
            return res.redirect(`${process.env.CLIENT_URL}` ? `${process.env.CLIENT_URL}/login` : "http://localhost:3000/login");
        }
        req.login(user, err => {
            if (err) {
                return next(err);
            }
            return UserController_1.UserController.loginThirdParty(req, res, next);
        });
    })(req, res, next);
});
router.get('/facebook', loginRateLimiter_1.userLoginRateLimiter, passport_1.default.authenticate('facebook', { scope: ["email"] }));
router.get('/facebook/callback', passport_1.default.authenticate('facebook', {
    failureRedirect: "/login/failed"
}), UserController_1.UserController.loginThirdParty);
exports.default = router;

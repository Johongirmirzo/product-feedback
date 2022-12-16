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
exports.UserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const sanitizeData_1 = require("../utils/sanitizeData");
const generateToken_1 = require("../utils/generateToken");
const User_1 = __importDefault(require("../models/User"));
const Feedback_1 = __importDefault(require("../models/Feedback"));
const Comment_1 = __importDefault(require("../models/Comment"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
exports.UserController = {
    loginUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User_1.default.findOne({ email: req.body.email });
        console.log(user, req.body.email);
        const accessToken = (0, generateToken_1.generateToken)({ id: user === null || user === void 0 ? void 0 : user._id, username: user.username, expiresIn: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}` });
        const refreshToken = (0, generateToken_1.generateToken)({ id: user === null || user === void 0 ? void 0 : user._id, username: user.username, expiresIn: `${process.env.REFRESH_TOKEN_EXPIRATION_TIME}` });
        console.log(`Access token time: ${process.env.ACCESS_TOKEN_EXPIRATION_TIME}`);
        console.log(`Refresh token time: ${process.env.REFRESH_TOKEN_EXPIRATION_TIME}`);
        if (!user) {
            return res.status(400).json({ message: "Wrong credentials!" });
        }
        console.log("Login", user);
        res.status(200).json(Object.assign({ accessToken, refreshToken }, user));
    }),
    loginFailed: (req, res) => {
        res.redirect(process.env.CLIENT_URL || "http://localhost:3000/login");
    },
    registerUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const sanitizedUserData = {
            username: (0, sanitizeData_1.sanitizeData)(req.body.username),
            email: (0, sanitizeData_1.sanitizeData)(req.body.email),
            password: (0, sanitizeData_1.sanitizeData)(req.body.password)
        };
        const user = yield User_1.default.findOne({ $and: [{ username: sanitizedUserData.username }, { email: sanitizedUserData.email }] });
        if (user) {
            return res.send(["Username already exists", "Email already exists"]);
        }
        const userDuplicate = yield User_1.default.findOne({ username: sanitizedUserData.username });
        if (userDuplicate) {
            return res.send(["Username already exists"]);
        }
        const emailDuplicate = yield User_1.default.findOne({ email: sanitizedUserData.email });
        if (emailDuplicate) {
            return res.send(["Email already exists"]);
        }
        const hashedPassword = yield bcrypt_1.default.hash(sanitizedUserData.password, 10);
        yield User_1.default.create({
            username: sanitizedUserData.username,
            email: sanitizedUserData.email,
            password: hashedPassword
        });
        res.status(201).json({ message: "User is successfully created" });
    }),
    loginThirdParty: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const user = req.user;
        const accessToken = (0, generateToken_1.generateToken)({ id: user === null || user === void 0 ? void 0 : user._id, username: user.username, expiresIn: `${process.env.ACCESS_TOKEN_EXPIRATION_TIME}` });
        const refreshToken = (0, generateToken_1.generateToken)({ id: user === null || user === void 0 ? void 0 : user._id, username: user.username, expiresIn: `${process.env.REFRESH_TOKEN_EXPIRATION_TIME}` });
        res.redirect(`${process.env.CLIENT_URL}/login?id=${user._id}&username=${user.username}&email=${user.email}&accessToken=${accessToken}&refreshToken=${refreshToken}&userPhoto=${user.profilePic ? user.profilePic : ""}`);
    }),
    logoutUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        req.session.destroy((err) => {
            if (err) {
                next(err);
            }
            else {
                res.clearCookie("connect.sid");
                res.json({ message: "User logged out" });
            }
        });
    }),
    // change user settings
    changeUsername: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const sanitizedData = {
            originalUsername: (0, sanitizeData_1.sanitizeData)(req.body.originalUsername),
            newUsername: (0, sanitizeData_1.sanitizeData)(req.body.username),
            password: (0, sanitizeData_1.sanitizeData)(req.body.password)
        };
        const user = yield User_1.default.findOne({ username: sanitizedData.newUsername });
        const comments = yield Comment_1.default.find();
        if (user) {
            return res.status(400).json({ isSuccess: false, message: "Username already in use!" });
        }
        const currentUser = yield User_1.default.findOne({ username: sanitizedData.originalUsername });
        console.log(currentUser, sanitizedData);
        if (currentUser && (yield bcrypt_1.default.compare(sanitizedData.password, currentUser.password))) {
            currentUser.username = sanitizedData.newUsername;
            yield currentUser.save();
            // update voter username if he/she changed his/her name
            yield Feedback_1.default.updateMany({ "feedbackVoters.username": sanitizedData.originalUsername }, { $set: { "feedbackVoters.$[voter].username": sanitizedData.newUsername } }, { arrayFilters: [{ "voter.username": sanitizedData.originalUsername }] });
            // update comment username when there are more than 1 comment
            if (comments.length > 0) {
                yield Comment_1.default.updateMany({ user: currentUser._id }, { $set: {
                        username: sanitizedData.newUsername,
                    } });
                yield Comment_1.default.updateMany({ replyingTo: req.body.originalUsername }, { $set: { replyingTo: sanitizedData.newUsername } });
            }
            return res.json({ isSuccess: true, message: "Username is changed" });
        }
        else {
            return res.status(400).json({ isSuccess: false, message: "Incorrect Password" });
        }
    }),
    changeEmail: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const sanitizedData = {
            originalEmail: (0, sanitizeData_1.sanitizeData)(req.body.originalEmail),
            newEmail: (0, sanitizeData_1.sanitizeData)(req.body.email),
            password: (0, sanitizeData_1.sanitizeData)(req.body.password)
        };
        const user = yield User_1.default.findOne({ email: sanitizedData.newEmail });
        if (user) {
            return res.status(400).json({ isSuccess: false, message: "Email already in use!" });
        }
        const currentUser = yield User_1.default.findOne({ email: sanitizedData.originalEmail });
        console.log(currentUser, sanitizedData);
        if (currentUser && (yield bcrypt_1.default.compare(sanitizedData.password, currentUser.password))) {
            currentUser.email = sanitizedData.newEmail;
            yield currentUser.save();
            console.log(currentUser);
            return res.json({ isSuccess: true, message: "Email is changed" });
        }
        else {
            return res.status(400).json({ isSuccess: false, message: "Incorrect Password" });
        }
    }),
    changePassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const sanitizedData = {
            username: (0, sanitizeData_1.sanitizeData)(req.body.username),
            currentPassword: (0, sanitizeData_1.sanitizeData)(req.body.currentPassword),
            newPassword: (0, sanitizeData_1.sanitizeData)(req.body.newPassword),
            newConfirmPassword: (0, sanitizeData_1.sanitizeData)(req.body.newConfirmPassword)
        };
        if (sanitizedData.newPassword !== sanitizedData.newConfirmPassword) {
            return res.status(400).json({ isSuccess: false, message: "Password did not match!" });
        }
        const user = yield User_1.default.findOne({ username: sanitizedData.username });
        if (user && (yield bcrypt_1.default.compare(sanitizedData.currentPassword, user.password))) {
            const hashedPassword = yield bcrypt_1.default.hash(sanitizedData.newPassword, 10);
            user.password = hashedPassword;
            yield user.save();
            return res.json({ isSuccess: true, message: "Password is changed" });
        }
        else {
            return res.status(400).json({ isSuccess: false, message: "Incorrect Password!" });
        }
    }),
    // delete account
    deleteAccount: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const user = yield User_1.default.findById(userId);
            console.log("Delete User:", user, userId);
            if (userId === user._id.toString()) {
                (user === null || user === void 0 ? void 0 : user.imageId) ? yield cloudinary_1.default.v2.uploader.destroy(user.imageId) : "";
                const feedback = yield Feedback_1.default.findOne({ user: userId });
                feedback ? yield Comment_1.default.deleteMany({ $or: [{ user: userId }, { feedback: feedback._id }] }) : "";
                yield Comment_1.default.deleteMany({ user: userId });
                yield Feedback_1.default.deleteMany({ user: userId });
                yield Feedback_1.default.updateMany({ "comments.userId": userId }, { $pull: { comments: { userId: userId } } });
                yield User_1.default.findByIdAndDelete(userId);
                res.json({ isSuccess: true, message: "Account is deleted successfully" });
            }
            else {
                res.status(403).json({ isSuccess: false, message: "You are unauthorized to delete this account" });
            }
        }
        catch (err) {
            console.log("Some error", err);
            res.status(400).json({ message: err.message });
        }
    }),
    updateProfilePicture: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const user = yield User_1.default.findById(userId);
            const comments = yield Comment_1.default.find();
            if (user.profilePic && user.imageId) {
                yield cloudinary_1.default.v2.uploader.destroy(user.imageId);
                const editedImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path);
                user.profilePic = editedImage.secure_url;
                user.imageId = editedImage.public_id;
                yield user.save();
                if (comments.length > 0) {
                    yield Comment_1.default.updateMany({ user: user._id }, { $set: { userPhoto: user.profilePic } });
                }
                res.json({ isSuccss: true, user });
                console.log("Edited Image", editedImage);
            }
            else {
                const newImage = yield cloudinary_1.default.v2.uploader.upload(req.file.path);
                user.profilePic = newImage.secure_url;
                user.imageId = newImage.public_id;
                yield user.save();
                if (comments.length > 0) {
                    yield Comment_1.default.updateMany({ user: user._id }, { $set: { userPhoto: user.profilePic } });
                }
                res.json({ isSuccss: true, user });
            }
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
};

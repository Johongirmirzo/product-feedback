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
exports.linkedinStrategy = exports.facebookStrategy = exports.googleStrategy = exports.passportLocal = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const passport_facebook_1 = require("passport-facebook");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_linkedin_oauth2_1 = require("passport-linkedin-oauth2");
const User_1 = __importDefault(require("../models/User"));
// serialize and deserialize user
(() => {
    passport_1.default.serializeUser((user, done) => {
        console.log("User being serialized", user);
        done(null, user._id);
    });
    passport_1.default.deserializeUser((id, done) => {
        console.log("User being deserialized", id);
        User_1.default.findById(id, (err, user) => done(err, user));
    });
})();
const passportLocal = () => {
    passport_1.default.use(new passport_local_1.Strategy({ usernameField: "email" }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            return done(null, false, { message: "You are not registered!" });
        }
        if (!(yield bcrypt_1.default.compare(password, user.password))) {
            return done(null, false, { message: "Password did not match!" });
        }
        else {
            return done(null, user);
        }
    })));
};
exports.passportLocal = passportLocal;
const googleStrategy = () => {
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID: `${process.env.GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
        callbackURL: `https://product-feedbacck-api.herokuapp.com/api/auth/google/callback`,
    }, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const newUser = {
            id: profile.id,
            username: profile.displayName,
            email: profile._json.email,
            password: yield bcrypt_1.default.hash(Date.now().toString(), 10),
            profilePic: (_a = profile === null || profile === void 0 ? void 0 : profile._json) === null || _a === void 0 ? void 0 : _a.picture
        };
        try {
            let user = yield User_1.default.findOne({ id: profile.id });
            if (user) {
                done(null, user);
            }
            else {
                user = yield User_1.default.create(newUser);
                done(null, user);
            }
            ;
        }
        catch (err) {
            done(err);
            console.log(err);
        }
    })));
};
exports.googleStrategy = googleStrategy;
const linkedinStrategy = () => {
    passport_1.default.use(new passport_linkedin_oauth2_1.Strategy({
        clientID: `${process.env.LINKEDIN_CLIENT_ID}`,
        clientSecret: `${process.env.LINKEDIN_CLIENT_SECRET}`,
        callbackURL: `https://product-feedbacck-api.herokuapp.com/api/auth/linkedin/callback`,
        scope: ['r_emailaddress', 'r_liteprofile'],
    }, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const newUser = {
            id: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            password: yield bcrypt_1.default.hash(Date.now().toString(), 10),
            profilePic: (_a = profile === null || profile === void 0 ? void 0 : profile.photos[0]) === null || _a === void 0 ? void 0 : _a.value
        };
        try {
            let user = yield User_1.default.findOne({ id: profile.id });
            if (user) {
                done(null, user);
            }
            else {
                user = yield User_1.default.create(newUser);
                done(null, user);
            }
            ;
        }
        catch (err) {
            done(err);
            console.log(err);
        }
    })));
};
exports.linkedinStrategy = linkedinStrategy;
const facebookStrategy = () => {
    passport_1.default.use(new passport_facebook_1.Strategy({
        clientID: `${process.env.FACEBOOK_CLIENT_ID}`,
        clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
        callbackURL: `https://product-feedbacck-api.herokuapp.com/api/auth/facebook/callback`,
        profileFields: ['id', 'emails', 'name', "displayName"],
        enableProof: true,
    }, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = {
            id: profile.id,
            username: profile.displayName,
            email: profile._json.email || "",
            password: yield bcrypt_1.default.hash(Date.now().toString(), 10),
        };
        console.log(profile);
        try {
            let user = yield User_1.default.findOne({ id: profile.id });
            if (user) {
                done(null, user);
            }
            else {
                user = yield User_1.default.create(newUser);
                done(null, user);
            }
            ;
        }
        catch (err) {
            done(err);
            console.log(err);
        }
    })));
};
exports.facebookStrategy = facebookStrategy;

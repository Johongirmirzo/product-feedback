"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const connectDB_1 = require("./configs/connectDB");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const feedbackRoutes_1 = __importDefault(require("./routes/feedbackRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
const passport_2 = require("./middlewares/passport");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "./public")));
app.use((0, helmet_1.default)());
(function () {
    (0, passport_2.passportLocal)();
    (0, passport_2.googleStrategy)();
    (0, passport_2.linkedinStrategy)();
    (0, passport_2.facebookStrategy)();
})();
const allowedDomains = [process.env.CLIENT_URL || "http://localhost:3000", process.env.ADMIN_URL || "http://localhost:3001"];
console.log(allowedDomains);
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        console.log("Origin Check", origin);
        // bypass the requests with no origin (like curl requests, mobile apps, etc )
        if (!origin)
            return callback(null, true);
        if (allowedDomains.indexOf(origin) === -1) {
            var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
            return callback(new Error(msg), false);
        }
        console.log("Access control enabled", allowedDomains.indexOf(origin));
        return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));
app.use((0, express_session_1.default)({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    // store: new MongoStore({mongoUrl: process.env.MONGODB_URL || "mongodb://localhost/product-feedback"})
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/api/auth", userRoutes_1.default);
app.use("/api/feedback", feedbackRoutes_1.default);
app.use("/api/comment", commentRoutes_1.default);
(function () {
    try {
        const PORT = process.env.PORT || 5500;
        (0, connectDB_1.connectDB)();
        app.listen(PORT, () => {
            console.log(`Server is listening on port: ${PORT}`);
        });
    }
    catch (err) {
        console.error(err);
    }
})();

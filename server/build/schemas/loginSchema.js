"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const yup_1 = require("yup");
exports.loginSchema = (0, yup_1.object)({
    email: (0, yup_1.string)()
        .required("Email can't be empty")
        .email("Email must contain @"),
    password: (0, yup_1.string)()
        .required("Password can't be empty")
        .min(5, "Minim required password chracters are 5")
        .max(25, "Maximum required password chracters are 25")
});

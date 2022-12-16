"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const yup_1 = require("yup");
exports.registerSchema = (0, yup_1.object)({
    username: (0, yup_1.string)()
        .required("Username can't be empty")
        .min(2, "Minimum required username characters are 2")
        .max(50, "Maximum allowed username characters are 50"),
    email: (0, yup_1.string)()
        .required("Email can't be empty")
        .email("Email must contain @")
        .min(5, "Minimum required email characters are 5")
        .max(50, "Maximum allowed email characters are 50"),
    password: (0, yup_1.string)()
        .required("Password can't be empty'")
        .min(8, "Minimum required password characters are 8")
        .max(35, "Maximum allowed password characters are 35"),
    confirmPassword: (0, yup_1.string)()
        .required()
        .oneOf([(0, yup_1.ref)("password"), null], "Passwords must match")
});

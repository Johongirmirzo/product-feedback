"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackSchema = void 0;
const yup_1 = require("yup");
exports.feedbackSchema = (0, yup_1.object)({
    title: (0, yup_1.string)()
        .required("Title can't be empty")
        .min(10, "Minimum required title characters are 10")
        .max(80, "Maximum allowed title characters are 80"),
    description: (0, yup_1.string)()
        .required("Description can't be empty")
        .min(25, "Minimum required title characters are 25")
        .max(250, "Maximum allowed title characters are 250"),
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidStatus = void 0;
const statuses = ["manufactured", "assembled", "shipped", "deployed"];
const isValidStatus = (status) => {
    return statuses.includes(status);
};
exports.isValidStatus = isValidStatus;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidLocation = void 0;
const locations_1 = __importDefault(require("./locations"));
const isValidLocation = (lat, lon) => {
    return locations_1.default.some(location => location[0] === lat && location[1] === lon);
};
exports.isValidLocation = isValidLocation;

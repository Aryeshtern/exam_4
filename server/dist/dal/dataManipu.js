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
exports.getAllBeepers = exports.createBeeper = void 0;
const jsonfile_1 = __importDefault(require("jsonfile"));
const dataPath = 'src/db/data.json';
const createBeeper = (newBeeper) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield jsonfile_1.default.readFile(dataPath);
        newBeeper.id = data[data.length - 1].id + 1;
        data.push(newBeeper);
        yield jsonfile_1.default.writeFile(dataPath, data);
        return newBeeper;
    }
    catch (_a) {
        return null;
    }
});
exports.createBeeper = createBeeper;
const getAllBeepers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield jsonfile_1.default.readFile(dataPath);
        return data;
    }
    catch (_a) {
        return null;
    }
});
exports.getAllBeepers = getAllBeepers;

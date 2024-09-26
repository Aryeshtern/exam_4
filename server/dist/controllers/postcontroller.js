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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.postBeeper = void 0;
const dataManipu_1 = require("../dal/dataManipu");
const postBeeper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beeper = {
            name: "beeper",
            status: "asdgggsadg",
            create_at: new Date(),
            detonated_at: undefined,
            latitude: undefined,
            longitude: undefined,
        };
        if (!beeper.name) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const createdBeeper = yield (0, dataManipu_1.createBeeper)(beeper);
        if (!createdBeeper) {
            return res.status(500).json({ message: "Error creating beeper" });
        }
        return res.status(201).json(createdBeeper);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creating beeper" });
    }
});
exports.postBeeper = postBeeper;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = req.body;
    return res.json({ userId: 9 });
});
exports.signIn = signIn;

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
exports.getBeeperByStatus = exports.getBeeper = exports.getBeepersList = void 0;
const dataManipu_1 = require("../dal/dataManipu");
const getBeepersList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beepers = yield (0, dataManipu_1.getAllBeepers)();
        if (beepers) {
            const beeperList = beepers.map(beeper => ({ id: beeper.id, name: beeper.name, status: beeper.status }));
            return res.json(beeperList);
        }
        else {
            return res.status(404).json({ message: "No beepers found" });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error retrieving beepers list" });
    }
});
exports.getBeepersList = getBeepersList;
const getBeeper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const beeperId = parseInt(req.params.id);
    try {
        const beeper = yield (0, dataManipu_1.getBeeperById)(beeperId);
        if (beeper) {
            return res.json(beeper);
        }
        else {
            return res.status(404).json({ message: "Beeper not found" });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error retrieving beeper" });
    }
});
exports.getBeeper = getBeeper;
const getBeeperByStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const status = req.params.status;
    try {
        const beepers = yield (0, dataManipu_1.getAllBeepers)();
        if (beepers) {
            const filteredBeepers = beepers.filter(beeper => beeper.status === status);
            const beeperList = filteredBeepers.map(beeper => ({ id: beeper.id, name: beeper.name }));
            return res.json(beeperList);
        }
        else {
            return res.status(404).json({ message: "No beepers found" });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error retrieving beepers by status" });
    }
});
exports.getBeeperByStatus = getBeeperByStatus;

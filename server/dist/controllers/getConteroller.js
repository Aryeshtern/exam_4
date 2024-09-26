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
exports.getBeepersList = void 0;
const dataManipu_1 = require("../dal/dataManipu");
const getBeepersList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beepers = yield (0, dataManipu_1.getAllBeepers)();
        if (beepers) {
            const beeperList = beepers.map(beeper => ({ id: beeper.id, name: beeper.name }));
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

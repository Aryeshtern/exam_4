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
exports.updateBeeper = void 0;
const validateLocation_1 = require("../services/validateLocation");
const validateStatus_1 = require("../services/validateStatus");
const dataManipu_1 = require("../dal/dataManipu");
const updateBeeper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beeperId = parseInt(req.params.id);
        const status = req.body.status;
        if (!beeperId || !status) {
            return res.status(400).json({ message: "Missing beeperId or status" });
        }
        if (!validateStatus_1.isValidStatus) {
            return res.status(400).json({ message: "Invalid status" });
        }
        if (status === "shipped") {
            if (!validateLocation_1.isValidLocation) {
                return res.status(400).json({ message: "Invalid location for shipping" });
            }
            let updateLocation = yield (0, dataManipu_1.updateBeeperLocation)(beeperId, req.body.let, req.body.log);
            if (!updateLocation) {
                return res.status(500).json({ message: "Error updating beeper location" });
            }
        }
        yield (0, dataManipu_1.updateStatusOfBeeper)(beeperId, status);
        return res.status(200).json({ message: "Status updated successfully" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error updating status" });
    }
});
exports.updateBeeper = updateBeeper;

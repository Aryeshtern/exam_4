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
exports.deleteBeeperController = void 0;
const dataManipu_1 = require("../dal/dataManipu");
const deleteBeeperController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const beeperId = parseInt(req.params.id);
    console.log(req.params);
    console.log(beeperId);
    try {
        yield (0, dataManipu_1.deleteBeeper)(beeperId);
        console.log(`deleted ${beeperId}`);
        return res.status(204).send();
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting beeper" });
    }
});
exports.deleteBeeperController = deleteBeeperController;

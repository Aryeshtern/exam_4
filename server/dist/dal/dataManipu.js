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
exports.deleteBeeper = exports.updateBeeperLocation = exports.updateStatusOfBeeper = exports.getBeeperById = exports.getAllBeepers = exports.createBeeper = void 0;
const jsonfile_1 = __importDefault(require("jsonfile"));
const dataPath = 'src/db/data.json';
const createBeeper = (newBeeper) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield jsonfile_1.default.readFile(dataPath);
        console.log(data);
        if (data.beepers.length < 1) {
            newBeeper.id = 1;
        }
        else {
            newBeeper.id = data.beepers[data.beepers.length - 1].id + 1;
        }
        data.beepers.push(newBeeper);
        yield jsonfile_1.default.writeFile(dataPath, data);
        return newBeeper;
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.createBeeper = createBeeper;
const getAllBeepers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield jsonfile_1.default.readFile(dataPath);
        return data.beepers;
    }
    catch (_a) {
        return null;
    }
});
exports.getAllBeepers = getAllBeepers;
const getBeeperById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield jsonfile_1.default.readFile(dataPath);
        let listData = data.beepers;
        return listData.find(b => b.id === id);
    }
    catch (_a) {
        return undefined;
    }
});
exports.getBeeperById = getBeeperById;
const updateStatusOfBeeper = (beeperId, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield jsonfile_1.default.readFile(dataPath);
        let listData = data.beepers;
        let beeperIndex = listData.findIndex(b => b.id === beeperId);
        if (beeperIndex !== -1) {
            listData[beeperIndex].status = status;
            yield jsonfile_1.default.writeFile(dataPath, data);
            if (status === 'shipped') {
                setTimeout(() => {
                    listData[beeperIndex].status = "detonated";
                    jsonfile_1.default.writeFile(dataPath, data);
                    console.log(`Beeper ${beeperId} has been detonated!`);
                }, 10000);
            }
            return true;
        }
        return null;
    }
    catch (_a) {
        return null;
    }
});
exports.updateStatusOfBeeper = updateStatusOfBeeper;
const updateBeeperLocation = (beeperId, latitude, longitude) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield jsonfile_1.default.readFile(dataPath);
        let beeperIndex = data.findIndex(b => b.id === beeperId);
        if (beeperIndex !== -1) {
            data[beeperIndex].latitude = latitude;
            data[beeperIndex].longitude = longitude;
            yield jsonfile_1.default.writeFile(dataPath, data);
            return true;
        }
        return false;
    }
    catch (_a) {
        return false;
    }
});
exports.updateBeeperLocation = updateBeeperLocation;
const deleteBeeper = (beeperId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield jsonfile_1.default.readFile(dataPath);
        let beepers = data.beepers;
        let beeperIndex = beepers.findIndex(b => b.id === beeperId);
        if (beeperIndex !== -1) {
            beepers.splice(beeperIndex, 1);
            yield jsonfile_1.default.writeFile(dataPath, data);
            return true;
        }
        return null;
    }
    catch (_a) {
        return null;
    }
});
exports.deleteBeeper = deleteBeeper;

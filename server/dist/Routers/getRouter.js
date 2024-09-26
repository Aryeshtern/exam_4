"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getConteroller_1 = require("../controllers/getConteroller");
const getRouter = (0, express_1.Router)();
getRouter.get('', getConteroller_1.getBeepersList);
exports.default = getRouter;

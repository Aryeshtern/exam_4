"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getConteroller_1 = require("../controllers/getConteroller");
const getRouter = (0, express_1.Router)();
getRouter.get('', getConteroller_1.getBeepersList);
getRouter.get('/:id', getConteroller_1.getBeeper);
getRouter.get('/status/:status', getConteroller_1.getBeeperByStatus);
exports.default = getRouter;

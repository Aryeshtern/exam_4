"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deleteController_1 = require("../controllers/deleteController");
const deleteRouter = (0, express_1.Router)();
deleteRouter.delete('/:id', deleteController_1.deleteBeeperController);
exports.default = deleteRouter;

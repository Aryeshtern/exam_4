"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const putControler_1 = require("../controllers/putControler");
const putRouter = (0, express_1.Router)();
putRouter.put('/:id/status', putControler_1.updateBeeper);
exports.default = putRouter;

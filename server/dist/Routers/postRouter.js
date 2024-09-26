"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postcontroller_1 = require("../controllers/postcontroller");
const postRouter = (0, express_1.Router)();
postRouter.post('', postcontroller_1.postBeeper);
exports.default = postRouter;

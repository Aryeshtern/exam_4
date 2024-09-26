"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const postRouter_1 = __importDefault(require("./Routers/postRouter"));
const getRouter_1 = __importDefault(require("./Routers/getRouter"));
app.use(express_1.default.json());
app.use('/api/beepers', postRouter_1.default);
app.use('/api/beepers', getRouter_1.default);
app.use('/api/beepers/:id', getRouter_1.default);
// app.use('/api/beepers/:id', );
// app.use('/api/beepers/:id/status',);
// app.use('/api/beepers/:id',);
// app.use('/api/beepers/status/:status', getRouter);
app.listen(port, () => console.log(`Server is running on port ${port}`));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.post('/api/beppers');
app.get('/api/beppers');
app.get('/api/beppers/:id');
app.put('/api/beppers/:id');
app.put('/api/beppers/:id/status');
app.delete('/api/beppers/:id');
app.get('/api/beppers/status/:status');
app.listen(port, () => console.log(`Server is running on port ${port}`));

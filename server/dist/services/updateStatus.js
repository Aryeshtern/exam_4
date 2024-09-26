"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statuses = ["manufactured", "assembled", ".shipped", "deployed", "detonated"];
const changeStatus = (status) => {
    const currentIndex = statuses.indexOf(status);
    if (currentIndex === statuses.length - 1) {
        return null;
    }
    else {
        return statuses[currentIndex + 1];
    }
};
exports.default = changeStatus;

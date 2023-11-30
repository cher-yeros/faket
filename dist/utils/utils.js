"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = exports.randomNum = void 0;
function randomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
exports.randomNum = randomNum;
function randomName(array) {
    const num = Math.floor(Math.random() * Math.floor(array.length));
    return array[num];
}
exports.randomName = randomName;
//# sourceMappingURL=utils.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faket_1 = require("./faket");
console.log(faket_1.faket.firstName({ lang: "am", prefix: false, gender: "m" }));
console.log(faket_1.faket.lastName({ lang: "am" }));
console.log(faket_1.faket.fullName({ prefix: true, lang: "am", ayat: true }));
exports.default = faket_1.faket;
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faker = void 0;
const address_1 = __importDefault(require("./address"));
const company_1 = __importDefault(require("./company"));
const finance_1 = require("./finance");
const person_1 = require("./person");
const phone_1 = __importDefault(require("./phone"));
exports.faker = Object.assign(Object.assign(Object.assign(Object.assign({ company: company_1.default }, person_1.person), phone_1.default), address_1.default), finance_1.finance);
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finance = void 0;
const finance_1 = require("../utils/finance");
const utils_1 = require("../utils/utils");
function bank({ all } = { all: undefined }) {
    return all ? finance_1.banks : (0, utils_1.randomzier)(finance_1.banks);
}
function bankName() {
    return (0, utils_1.randomzier)(finance_1.banks).name;
}
function microfinances() { }
function fintechs() { }
function paymentMethod({ all = false, local = false } = {
    all: undefined,
    local: undefined,
}) {
    return all
        ? finance_1.paymentMethods.filter((pm) => pm.local !== local)
        : (0, utils_1.randomzier)(finance_1.paymentMethods.filter((pm) => pm.local !== local)).name;
}
function accountNumber({ digit } = { digit: undefined }) {
    const acc = generator({ digit });
    return acc;
}
function transaction() { }
exports.finance = {
    bank,
    bankName,
    paymentMethod,
    accountNumber,
    transaction,
    microfinances,
    fintechs,
};
function generator({ digit = 8 }) {
    let result = "";
    for (let i = 0; i < digit; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}
//# sourceMappingURL=finance.js.map
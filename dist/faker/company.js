"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const companies_1 = require("../utils/companies");
const utils_1 = require("../utils/utils");
// let Company: Company;
const company = {
    name: () => {
        return (0, utils_1.randomzier)(companies_1.companies).name;
    },
    website: () => {
        return (0, utils_1.randomzier)(companies_1.companies).website;
    },
    industry: () => {
        return (0, utils_1.randomzier)(companies_1.companies).industry;
    },
    country: () => {
        return (0, utils_1.randomzier)(companies_1.companies).country;
    },
    type: () => {
        return (0, utils_1.randomzier)(companies_1.companies).type;
    },
    info: () => (0, utils_1.randomzier)(companies_1.companies),
};
exports.default = company;
//# sourceMappingURL=company.js.map
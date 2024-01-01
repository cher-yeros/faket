"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("../utils/address");
const companies_1 = require("../utils/companies");
const utils_1 = require("../utils/utils");
// let Company: Company;
const address = {
    region: () => {
        return (0, utils_1.randomzier)(address_1.regions).name;
    },
    city: () => {
        return (0, utils_1.randomzier)(address_1.cities).name;
    },
    subCity: ({ city } = { city: undefined }) => {
        const sub_cities = city
            ? address_1.subCities.filter((sc) => sc.city === city)
            : address_1.subCities;
        return (0, utils_1.randomzier)(sub_cities).name;
    },
    sefer: ({ city } = { city: undefined }) => {
        const allSefers = city ? address_1.sefers.filter((sc) => sc.city === city) : address_1.sefers;
        return (0, utils_1.randomzier)(allSefers).name;
    },
    info: () => (0, utils_1.randomzier)(companies_1.companies),
};
exports.default = address;
//# sourceMappingURL=address.js.map
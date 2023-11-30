"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faket = void 0;
const dataset_1 = require("./utils/dataset");
const utils_1 = require("./utils/utils");
function fullName({ gender, lang, prefix = false, ayat = false } = {
    gender: undefined,
    lang: undefined,
}) {
    return `${firstName({ gender, lang, prefix })} ${lastName({ lang })}${ayat ? " " + lastName({ lang }) : ""}`;
}
function firstName({ gender, lang = "en", prefix = false } = {
    gender: undefined,
    lang: undefined,
}) {
    if (!gender) {
        return lang === "en"
            ? (prefix
                ? (0, utils_1.randomName)([...dataset_1.malesPrefixEn, ...dataset_1.femalesPrefixEn]) + " "
                : "") + (0, utils_1.randomName)([...dataset_1.malesEn, ...dataset_1.femalesEn])
            : (prefix
                ? (0, utils_1.randomName)([...dataset_1.malesPrefixAm, ...dataset_1.femalesPrefixAm]) + " "
                : "") + (0, utils_1.randomName)([...dataset_1.malesAm, ...dataset_1.femalesAm]);
    }
    if (gender === "m") {
        return lang === "en"
            ? (prefix ? (0, utils_1.randomName)(dataset_1.malesPrefixEn) + " " : "") + (0, utils_1.randomName)(dataset_1.malesEn)
            : (prefix ? (0, utils_1.randomName)(dataset_1.malesPrefixAm) + " " : "") + (0, utils_1.randomName)(dataset_1.malesAm);
    }
    else {
        return lang === "en"
            ? (prefix ? (0, utils_1.randomName)(dataset_1.femalesPrefixEn) + " " : "") +
                (0, utils_1.randomName)(dataset_1.femalesEn)
            : (prefix ? (0, utils_1.randomName)(dataset_1.femalesPrefixAm) + " " : "") +
                (0, utils_1.randomName)(dataset_1.femalesAm);
    }
}
function lastName({ lang = "en" } = { lang: undefined }) {
    return lang === "en" ? (0, utils_1.randomName)(dataset_1.malesEn) : (0, utils_1.randomName)(dataset_1.malesAm);
}
exports.faket = {
    firstName,
    lastName,
    fullName,
};
//# sourceMappingURL=faket.js.map
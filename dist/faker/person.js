"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
const dataset_1 = require("../utils/dataset");
const oromiffa_1 = require("../utils/oromiffa");
const utils_1 = require("../utils/utils");
function fullName({ gender, lang, prefix = false, ayat = false, oromifa = false } = {
    gender: undefined,
    lang: undefined,
}) {
    return `${firstName({ gender, lang, prefix, oromifa })} ${lastName({
        lang,
        oromifa,
    })}${ayat ? " " + lastName({ lang, oromifa }) : ""}`;
}
function firstName({ gender, lang = "en", prefix = false, oromifa = false } = {
    gender: undefined,
    lang: undefined,
}) {
    if (!gender) {
        if (oromifa) {
            const _or_name = (0, utils_1.randomzier)(oromiffa_1.oromiffa_names);
            const _or = _or_name.name_or;
            const _am = _or_name.name_am;
            const _en = _or_name.name_en;
            const __or_prefix = (0, utils_1.randomzier)(oromiffa_1.oromifa_prefix.filter((pr) => pr.gender === _or_name.gender));
            const __or = __or_prefix.name_or;
            const __am = __or_prefix.name_am;
            const __en = __or_prefix.name_en;
            return ((prefix
                ? (lang === "am" ? __am : lang === "en" ? __en : __or) + " "
                : "") + (lang === "am" ? _am : lang === "en" ? _en : _or));
        }
        return lang === "en"
            ? (prefix
                ? (0, utils_1.randomName)([...dataset_1.malesPrefixEn, ...dataset_1.femalesPrefixEn]) + " "
                : "") + (0, utils_1.randomName)([...dataset_1.malesEn, ...dataset_1.femalesEn])
            : (prefix
                ? (0, utils_1.randomName)([...dataset_1.malesPrefixAm, ...dataset_1.femalesPrefixAm]) + " "
                : "") + (0, utils_1.randomName)([...dataset_1.malesAm, ...dataset_1.femalesAm]);
    }
    if (oromifa) {
        const _or_name = (0, utils_1.randomzier)(oromiffa_1.oromiffa_names.filter((name) => name.gender === gender));
        const _or = _or_name.name_or;
        const _am = _or_name.name_am;
        const _en = _or_name.name_en;
        const __or_prefix = (0, utils_1.randomzier)(oromiffa_1.oromifa_prefix.filter((pr) => pr.gender === _or_name.gender));
        const __or = __or_prefix.name_or;
        const __am = __or_prefix.name_am;
        const __en = __or_prefix.name_en;
        return ((prefix
            ? (lang === "am" ? __am : lang === "en" ? __en : __or) + " "
            : "") + (lang === "am" ? _am : lang === "en" ? _en : _or));
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
function lastName({ oromifa = false, lang = "en" } = {
    oromifa: undefined,
    lang: undefined,
}) {
    if (oromifa) {
        const _or_name = (0, utils_1.randomzier)(oromiffa_1.oromiffa_names.filter((name) => name.gender === "m"));
        const _or = _or_name.name_or;
        const _am = _or_name.name_am;
        const _en = _or_name.name_en;
        return lang === "am" ? _am : lang === "en" ? _en : _or;
    }
    return lang === "en" ? (0, utils_1.randomName)(dataset_1.malesEn) : (0, utils_1.randomName)(dataset_1.malesAm);
}
exports.person = {
    firstName,
    lastName,
    fullName,
};
//# sourceMappingURL=person.js.map
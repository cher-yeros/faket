import { NameParam } from "../types";
import {
  femalesAm,
  femalesEn,
  malesAm,
  malesEn,
  malesPrefixAm,
  malesPrefixEn,
  femalesPrefixAm,
  femalesPrefixEn,
} from "../utils/dataset";
import { oromifa_prefix, oromiffa_names } from "../utils/oromiffa";

import { randomName, randomzier } from "../utils/utils";

function fullName(
  { gender, lang, prefix = false, ayat = false, oromifa = false }: NameParam = {
    gender: undefined,
    lang: undefined,
  }
): string {
  return `${firstName({ gender, lang, prefix, oromifa })} ${lastName({
    lang,
    oromifa,
  })}${ayat ? " " + lastName({ lang, oromifa }) : ""}`;
}

function firstName(
  { gender, lang = "en", prefix = false, oromifa = false }: NameParam = {
    gender: undefined,
    lang: undefined,
  }
): string {
  if (!gender) {
    if (oromifa) {
      const _or_name = randomzier(oromiffa_names);
      const _or = _or_name.name_or;
      const _am = _or_name.name_am;
      const _en = _or_name.name_en;

      const __or_prefix = randomzier(
        oromifa_prefix.filter((pr) => pr.gender === _or_name.gender)
      );
      const __or = __or_prefix.name_or;
      const __am = __or_prefix.name_am;
      const __en = __or_prefix.name_en;

      return (
        (prefix
          ? (lang === "am" ? __am : lang === "en" ? __en : __or) + " "
          : "") + (lang === "am" ? _am : lang === "en" ? _en : _or)
      );
    }
    return lang === "en"
      ? (prefix
          ? randomName([...malesPrefixEn, ...femalesPrefixEn]) + " "
          : "") + randomName([...malesEn, ...femalesEn])
      : (prefix
          ? randomName([...malesPrefixAm, ...femalesPrefixAm]) + " "
          : "") + randomName([...malesAm, ...femalesAm]);
  }

  if (oromifa) {
    const _or_name = randomzier(
      oromiffa_names.filter((name) => name.gender === gender)
    );
    const _or = _or_name.name_or;
    const _am = _or_name.name_am;
    const _en = _or_name.name_en;

    const __or_prefix = randomzier(
      oromifa_prefix.filter((pr) => pr.gender === _or_name.gender)
    );
    const __or = __or_prefix.name_or;
    const __am = __or_prefix.name_am;
    const __en = __or_prefix.name_en;
    return (
      (prefix
        ? (lang === "am" ? __am : lang === "en" ? __en : __or) + " "
        : "") + (lang === "am" ? _am : lang === "en" ? _en : _or)
    );
  }

  if (gender === "m") {
    return lang === "en"
      ? (prefix ? randomName(malesPrefixEn) + " " : "") + randomName(malesEn)
      : (prefix ? randomName(malesPrefixAm) + " " : "") + randomName(malesAm);
  } else {
    return lang === "en"
      ? (prefix ? randomName(femalesPrefixEn) + " " : "") +
          randomName(femalesEn)
      : (prefix ? randomName(femalesPrefixAm) + " " : "") +
          randomName(femalesAm);
  }
}

function lastName(
  { oromifa = false, lang = "en" }: { oromifa?: boolean; lang?: string } = {
    oromifa: undefined,
    lang: undefined,
  }
): string {
  if (oromifa) {
    const _or_name = randomzier(
      oromiffa_names.filter((name) => name.gender === "m")
    );
    const _or = _or_name.name_or;
    const _am = _or_name.name_am;
    const _en = _or_name.name_en;

    return lang === "am" ? _am : lang === "en" ? _en : _or;
  }
  return lang === "en" ? randomName(malesEn) : randomName(malesAm);
}

export const person = {
  firstName,
  lastName,
  fullName,
};

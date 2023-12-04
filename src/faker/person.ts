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

import { randomName } from "../utils/utils";

function fullName(
  { gender, lang, prefix = false, ayat = false }: NameParam = {
    gender: undefined,
    lang: undefined,
  }
): string {
  return `${firstName({ gender, lang, prefix })} ${lastName({ lang })}${
    ayat ? " " + lastName({ lang }) : ""
  }`;
}

function firstName(
  { gender, lang = "en", prefix = false }: NameParam = {
    gender: undefined,
    lang: undefined,
  }
): string {
  if (!gender) {
    return lang === "en"
      ? (prefix
          ? randomName([...malesPrefixEn, ...femalesPrefixEn]) + " "
          : "") + randomName([...malesEn, ...femalesEn])
      : (prefix
          ? randomName([...malesPrefixAm, ...femalesPrefixAm]) + " "
          : "") + randomName([...malesAm, ...femalesAm]);
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
  { lang = "en" }: { lang?: string } = { lang: undefined }
): string {
  return lang === "en" ? randomName(malesEn) : randomName(malesAm);
}

export const person = {
  firstName,
  lastName,
  fullName,
};

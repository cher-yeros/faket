import { NameParam } from "./types";
declare function fullName({ gender, lang, prefix, ayat }?: NameParam): string;
declare function firstName({ gender, lang, prefix }?: NameParam): string;
declare function lastName({ lang }?: {
    lang?: string;
}): string;
export declare const faker: {
    firstName: typeof firstName;
    lastName: typeof lastName;
    fullName: typeof fullName;
};
export {};

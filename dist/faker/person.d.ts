import { NameParam } from "../types";
declare function fullName({ gender, lang, prefix, ayat, oromifa }?: NameParam): string;
declare function firstName({ gender, lang, prefix, oromifa }?: NameParam): string;
declare function lastName({ oromifa, lang }?: {
    oromifa?: boolean;
    lang?: string;
}): string;
export declare const person: {
    firstName: typeof firstName;
    lastName: typeof lastName;
    fullName: typeof fullName;
};
export {};

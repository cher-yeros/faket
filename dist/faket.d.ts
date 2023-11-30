interface NameParam {
    gender?: "m" | "f" | undefined;
    lang?: "en" | "am" | undefined;
    prefix?: boolean | undefined;
    ayat?: boolean | undefined;
}
declare function fullName({ gender, lang, prefix, ayat }?: NameParam): string;
declare function firstName({ gender, lang, prefix }?: NameParam): string;
declare function lastName({ lang }?: {
    lang?: string;
}): string;
export declare const faket: {
    firstName: typeof firstName;
    lastName: typeof lastName;
    fullName: typeof fullName;
};
export {};

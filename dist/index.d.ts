export declare const faket: {
    firstName: ({ gender, lang, prefix }?: import("./types").NameParam) => string;
    lastName: ({ lang }?: {
        lang?: string | undefined;
    }) => string;
    fullName: ({ gender, lang, prefix, ayat }?: import("./types").NameParam) => string;
};

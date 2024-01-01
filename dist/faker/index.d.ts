export declare const faker: {
    bank: ({ all }?: {
        all?: boolean | undefined;
    }) => import("../types").Bank | import("../types").Bank[];
    bankName: () => string;
    paymentMethod: ({ all, local }?: {
        all?: boolean | undefined;
        local?: boolean | undefined;
    }) => string | import("../types").PaymentMethod[];
    accountNumber: ({ digit }?: {
        digit?: number | undefined;
    }) => string;
    transaction: () => void;
    microfinances: () => void;
    fintechs: () => void;
    region: () => string;
    city: () => string;
    subCity: ({ city }?: import("../types").CityParam) => string;
    sefer: ({ city }?: import("../types").CityParam) => string;
    info: () => any;
    phone: ({ provider, cc, ccc }?: import("../types").PhoneParam) => string;
    firstName: ({ gender, lang, prefix, oromifa }?: import("../types").NameParam) => string;
    lastName: ({ oromifa, lang }?: {
        oromifa?: boolean | undefined;
        lang?: string | undefined;
    }) => string;
    fullName: ({ gender, lang, prefix, ayat, oromifa }?: import("../types").NameParam) => string;
    company: {
        name: () => string;
        website: () => string;
        industry: () => string;
        country: () => string;
        type: () => string;
        info: () => any;
    };
};

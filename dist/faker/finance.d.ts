import { Bank, PaymentMethod } from "../types";
declare function bank({ all }?: {
    all?: boolean;
}): Bank | Bank[];
declare function bankName(): string;
declare function microfinances(): void;
declare function fintechs(): void;
declare function paymentMethod({ all, local }?: {
    all?: boolean;
    local?: boolean;
}): string | PaymentMethod[];
declare function accountNumber({ digit }?: {
    digit?: number;
}): string;
declare function transaction(): void;
export declare const finance: {
    bank: typeof bank;
    bankName: typeof bankName;
    paymentMethod: typeof paymentMethod;
    accountNumber: typeof accountNumber;
    transaction: typeof transaction;
    microfinances: typeof microfinances;
    fintechs: typeof fintechs;
};
export {};

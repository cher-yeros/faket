export interface NameParam {
    gender?: "m" | "f" | undefined;
    lang?: "en" | "am" | "or" | undefined;
    prefix?: boolean | undefined;
    ayat?: boolean | undefined;
    oromifa?: boolean | undefined;
}
export interface Company {
    title: string;
    filename: string;
    url: string;
    category: string[];
    Hint: string;
}
export interface PhoneParam {
    provider?: "et" | "safari";
    cc?: boolean;
    ccc?: string;
}
export interface CompanyProfile {
    name?: string;
    link?: string;
    company_name?: string;
    website?: string;
    snippet?: string;
    aum?: string;
    type?: string;
    founded?: string;
    revenue?: string;
    industry?: string;
    products?: string;
    linkedin?: string;
    key_people?: string;
    size_range?: string;
    native_name?: string;
    headquarters?: string;
    total_assets?: string;
    total_equity?: string;
    number_of_employees?: string;
    number_of_locations?: string;
}
export interface CityParam {
    city?: "Addis Ababa" | "Gonder" | "Jimma" | "Hawassa" | "Dire Dawa" | "Mek'elē" | "Gambela";
}
export interface Bank {
    name: string;
    logo: string;
    website: string;
    link: string;
}
export interface PaymentMethod {
    name: string;
    local: boolean;
}

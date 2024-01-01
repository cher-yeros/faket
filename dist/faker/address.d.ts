import { CityParam } from "../types";
declare const address: {
    region: () => string;
    city: () => string;
    subCity: ({ city }?: CityParam) => string;
    sefer: ({ city }?: CityParam) => string;
    info: () => any;
};
export default address;

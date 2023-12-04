import { CityParam } from "../types";
import { cities, regions, sefers, subCities } from "../utils/address";
import { companies } from "../utils/companies";
import { randomzier } from "../utils/utils";

// let Company: Company;

const address = {
  region: () => {
    return randomzier(regions).name as string;
  },
  city: () => {
    return randomzier(cities).name as string;
  },
  subCity: ({ city }: CityParam = { city: undefined }) => {
    const sub_cities = city
      ? subCities.filter((sc) => sc.city === city)
      : subCities;

    return randomzier(sub_cities).name as string;
  },

  sefer: ({ city }: CityParam = { city: undefined }) => {
    const allSefers = city ? sefers.filter((sc) => sc.city === city) : sefers;

    return randomzier(allSefers).name as string;
  },

  info: () => randomzier(companies),
};

export default address;

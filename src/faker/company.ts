import { companies } from "../utils/companies";
import { randomzier } from "../utils/utils";

// let Company: Company;

const company = {
  name: () => {
    return randomzier(companies).name as string;
  },
  website: () => {
    return randomzier(companies).website as string;
  },
  industry: () => {
    return randomzier(companies).industry as string;
  },
  country: () => {
    return randomzier(companies).country as string;
  },
  type: () => {
    return randomzier(companies).type as string;
  },
  info: () => randomzier(companies),
};

export default company;

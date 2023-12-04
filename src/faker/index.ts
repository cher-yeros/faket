import address from "./address";
import company from "./company";
import { finance } from "./finance";
import { person } from "./person";
import phone from "./phone";

export const faker = {
  company,
  ...person,
  ...phone,
  ...address,
  ...finance,
};

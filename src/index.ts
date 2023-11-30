import path from "path";
import { faket } from "./faket";

console.log(faket.firstName({ lang: "am", prefix: false, gender: "m" }));

console.log(faket.lastName({ lang: "am" }));

console.log(faket.fullName({ prefix: true, lang: "am", ayat: true }));

export default faket;

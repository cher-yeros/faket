import { PhoneParam } from "../types";

function phone(
  { provider = "et", cc = false, ccc }: PhoneParam = { ccc: undefined }
) {
  const phone = phoneGenerator({});

  const s1 = (provider === "et" ? "9" : "7") + phone;

  const s3 = (cc ? "+251" : "0") + s1;

  const s2 = ccc ? ccc + phone : s3;

  return s2;
}

function phoneGenerator({ digit = 8 }: { digit?: number }) {
  let result = "";
  for (let i = 0; i < digit; i++) {
    result += Math.floor(Math.random() * 10);
  }

  return result;
}

export default {
  phone,
};

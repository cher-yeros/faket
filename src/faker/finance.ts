import { Bank, PaymentMethod } from "../types";
import { banks as allBanks, paymentMethods } from "../utils/finance";
import { randomzier } from "../utils/utils";

function bank({ all }: { all?: boolean } = { all: undefined }): Bank | Bank[] {
  return all ? allBanks : randomzier(allBanks);
}

function bankName(): string {
  return randomzier(allBanks).name;
}

function microfinances() {}
function fintechs() {}

function paymentMethod(
  { all = false, local = false }: { all?: boolean; local?: boolean } = {
    all: undefined,
    local: undefined,
  }
): string | PaymentMethod[] {
  return all
    ? paymentMethods.filter((pm) => pm.local !== local)
    : randomzier(paymentMethods.filter((pm) => pm.local !== local)).name;
}

function accountNumber(
  { digit }: { digit?: number } = { digit: undefined }
): string {
  const acc = generator({ digit });

  return acc;
}
function transaction() {}

export const finance = {
  bank,
  bankName,
  paymentMethod,
  accountNumber,
  transaction,
  microfinances,
  fintechs,
};

function generator({ digit = 8 }: { digit?: number }) {
  let result = "";

  for (let i = 0; i < digit; i++) {
    result += Math.floor(Math.random() * 10);
  }

  return result;
}

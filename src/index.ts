import { faker } from "./faker";

// console.log(faker.phone());
// console.log(faker.phone({ provider: "safari" }));
// console.log(faker.phone({ ccc: "00251", cc: true }));
// console.log(faker.phone({ cc: true, provider: "safari" }));
// console.log(faker.phone());

// console.log(faker.company.name()); // Washington Medical Center
// console.log(faker.company.industry()); // hospitality
// console.log(faker.company.country()); // ethiopia
// console.log(faker.company.website()); // https://www.ahaduradio.com

// console.log(faker.company.info());
// {
//   name: 'Dico Technologies Solution Pvt. Ltd. Co.',
//   link: '/companies/profile/dico-technologies-solution-pvt-ltd-co/',
//   company_name: 'Dico Technologies Solution Pvt. Ltd. Co.',
//   website: 'dicoplc.com',
//   country: 'ethiopia',
//   founded: '2007.0',
//   industry: 'telecommunications',
//   linkedin: 'linkedin.com/company/dico-technologies-solution-pvt-ltd-co-',
//   size_range: '11 - 50',
//   display_url: 'dicoplc.com',
//   headquarters: 'addis abeba, adis abeba, ethiopia',
//   'number_of employees': '7'
// }

// console.log(faker.region()); // Somali Region
// console.log(faker.city()); // Asosa
// console.log(faker.subCity({ city: "Addis Ababa" })); // Nefas Silk
// console.log(faker.sefer()); // Eri Bekentu
// console.log(faker.sefer({ city: "Dire Dawa" })); //Shinile Mek'Abir

console.log(faker.bank());
console.log(faker.bank({ all: true }));
console.log(faker.bankName()); // Bunna Bank
console.log(faker.accountNumber()); // 52746739
console.log(faker.accountNumber({ digit: 14 })); // 85131705457409
console.log(faker.paymentMethod({ local: false })); // E-Birr
console.log(faker.paymentMethod({ all: true }));

export const faket = faker;

# faket

Fake Ethiopian Names, Phone Number and Addresses in English and Amharic Letters.

## Installation

```sh
npm install @muleta/faket

```

## Example

```sh
import { faket } from '@muleta/faket'

```

### Person Name

```javascript
console.log(faket.firstName()); // Absalat
console.log(faket.firstName({ lang: "am", prefix: true, gender: "m" })); // አቶ ተሾመ
console.log(faket.lastName({ lang: "am" })); //አዲሱ
console.log(
  faket.fullName({ prefix: true, lang: "am", ayat: true, gender: "f" })
); //ወ/ሪት ዳዊት ኢሳያስ ከፍያለው
```

### Phone Number

```javascript
console.log(faket.phone()); // 0961464781
console.log(faket.phone({ provider: "safari" })); // 0717683330
console.log(faket.phone({ ccc: "00251", cc: true })); // 0025114303114
console.log(faket.phone({ cc: true, provider: "safari" })); // +251736467292
```

### Company

```javascript
console.log(faker.company.name()); // Washington Medical Center
console.log(faker.company.industry()); // hospitality
console.log(faker.company.country()); // ethiopia
console.log(faker.company.website()); // https://www.ahaduradio.com

console.log(faker.company.info());
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
```

### Address

```typescript
console.log(faker.region()); // Somali Region
console.log(faker.city()); // Asosa
console.log(faker.subCity({ city: "Addis Ababa" })); // Nefas Silk
console.log(faker.sefer()); // Eri Bekentu
console.log(faker.sefer({ city: "Dire Dawa" })); //Shinile Mek'Abir
```

### Finance

```typescript
console.log(faker.bank());
console.log(faker.bank({ all: true }));
console.log(faker.bankName()); // Bunna Bank
console.log(faker.accountNumber()); // 52746739
console.log(faker.accountNumber({ digit: 14 })); // 85131705457409
console.log(faker.paymentMethod({ local: false })); // E-Birr
console.log(faker.paymentMethod({ all: true }));
```

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

### Oromiffa Names

```typescript
console.log(
  faket.firstName({ oromifa: true, prefix: true, lang: "or", gender: "m" })
);
console.log(
  faket.fullName({ oromifa: true, prefix: true, lang: "am", gender: "f" })
);
console.log(faket.firstName({ oromifa: true, lang: "en", gender: "f" }));
console.log(faket.fullName({ oromifa: true, lang: "or", gender: "f" }));
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
console.log(faket.company.name()); // Washington Medical Center
console.log(faket.company.industry()); // hospitality
console.log(faket.company.country()); // ethiopia
console.log(faket.company.website()); // https://www.ahaduradio.com

console.log(faket.company.info());
```

### Address

```typescript
console.log(faket.region()); // Somali Region
console.log(faket.city()); // Asosa
console.log(faket.subCity({ city: "Addis Ababa" })); // Nefas Silk
console.log(faket.sefer()); // Eri Bekentu
console.log(faket.sefer({ city: "Dire Dawa" })); //Shinile Mek'Abir
```

### Finance

```typescript
console.log(faket.bank());
console.log(faket.bank({ all: true }));
console.log(faket.bankName()); // Bunna Bank
console.log(faket.accountNumber()); // 52746739
console.log(faket.accountNumber({ digit: 14 })); // 85131705457409
console.log(faket.paymentMethod({ local: false })); // E-Birr
console.log(faket.paymentMethod({ all: true }));
```

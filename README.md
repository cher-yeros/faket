# faket

Fake Ethiopian Names, Phone Number and Addresses in English and Amharic Letters.

## Installation

```sh
npm i @muleta/faket

```

## Example

```sh
import { faket } from '@muleta/faket'

```

```typescript
faket.firstName(); // Absalat
faket.firstName({ lang: "am", prefix: true, gender: "m" }); // አቶ ተሾመ
faket.lastName({ lang: "am" }); //አዲሱ
faket.fullName({ prefix: true, lang: "am", ayat: true, gender: "f" }); //ወ/ሪት ዳዊት ኢሳያስ ከፍያለው
```

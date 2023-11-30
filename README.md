# faket

Fake Ethiopian Names, Phone Number and Addresses in English and Amharic Letters.

## Usage

npm i @yerosen/faket

## Example

```sh
import {faket} from '@yerosen/faket'

```

```console.log(faket.firstName({ lang: "am", prefix: false, gender: "m" }));

console.log(faket.lastName({ lang: "am" }));

console.log(faket.fullName({ prefix: true, lang: "am", ayat: true }));


```

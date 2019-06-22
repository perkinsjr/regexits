<h1 align="center">Welcome to Regexits 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-2.0.2-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/perkinsjr/regexits#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/perkinsjr/regexits/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/perkinsjr/regexits/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/james_r_perkins">
    <img alt="Twitter: james_r_perkins" src="https://img.shields.io/twitter/follow/james_r_perkins.svg?style=social" target="_blank" />
  </a>
</p>

> Regexits is a curated package to handle regex on your next project

### 🏠 [Homepage](https://github.com/perkinsjr/regexits#readme)

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```
## How to use

```sh
const regexits = require('regexits')

// To find if a string matches a pattern.
regexits.match(string, pattern);

// To remove a certain type from a string.
regexits.removeFromString(string, pattern);

// To get parameters from url.
regexits.getURLParameters(url);
```

## What Regex matching is available 
```sh
DateSlashes , Time24hr , Date
ISO8601DT , HTMLtag , HEXColor
URLSlug , SrcImgTag , URL
Email, Password , PosInt
NegInt, Integer , PosNum
NegNum, Num ,PhoneNum
NewLine , CSSComment , USCAZip
SSN , EMAIL, IPV4
IPV6 , IPV4ORV6 , VISA
MASTERCARD , AMEX ,DINERS
DISCOVER, JCB , POBOX
SHA256 , MD5 , MAINNET
TESTNET , GITHUB
```

## Author

👤 **James Perkins**

* Twitter: [@james_r_perkins](https://twitter.com/james_r_perkins)
* Github: [@perkinsjr](https://github.com/perkinsjr)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/perkinsjr/regexits/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/james_perkins">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2019 [James Perkins](https://github.com/perkinsjr).<br />
This project is [MIT](https://github.com/perkinsjr/regexits/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
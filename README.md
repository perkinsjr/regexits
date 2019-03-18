[![Build Status](https://travis-ci.com/perkinsjr/regexits.svg?branch=master)](https://travis-ci.com/perkinsjr/regexits)
[![tippin.me](https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@james_r_perkins/F0918E)](https://tippin.me/@james_r_perkins)
[![Donate.Paypal](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/jamesperkinsOSS)
[![Donate.Coffee](https://img.shields.io/badge/Donate-BuyMeCoffee-red.svg)](https://www.buymeacoffee.com/Of6xAMjSK)
<a  href="https://www.patreon.com/james_perkins">
	<img style="text-align: center;" src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="100">
</a>

<div align="center">
	<h2>
		Regexits a light weight regex npm package for common used regex match, string manipulation.
	</h2>
	<br>
</div>

## To install

    npm install regexits

## To Use

    const regexits = require('regexits')

    // To find if a string matches a pattern.
    regexits.match(string, pattern);

    // To remove a certain type from a string.
    regexits.removeFromString(string, pattern);

    // To get parameters from url.
    regexits.getURLParameters(url);
    

## Quick Example

    const regexits = require('regexits')

    regexit('012-34-5678', 'SSN')
  
    returns true

    const strippedString = regexits.removeFromString('REGE5634324XITS IS52353 GREA55454T' , 'REMOVENUMBERS');

    returns 'REGEXITS IS GREAT'

    const parameter = regexits.getURLParameters('http://url.com/page?name=Adam&surname=Smith');

    returns {name: 'Adam',surname: 'Smith',}

## Patterns for matching that are current available  

* DateSlashes , Time24hr , Date
* ISO8601DT , HTMLtag , HEXColor
* URLSlug , SrcImgTag , URL
* Email, Password , PosInt
* NegInt, Integer , PosNum
* NegNum, Num ,PhoneNum
* NewLine , CSSComment , USCAZip
* SSN , EMAIL, IPV4
* IPV6 , IPV4ORV6 , VISA
* MASTERCARD , AMEX ,DINERS
* DISCOVER, JCB , POBOX
* SHA256 , MD5 , MAINNET
* TESTNET , GITHUB

## To remove from string

* SPECIALCHARS
* ALLWHITESPACE
* TRIMEND
* TRIMBEGIN
* REMOVENUMBERS
* LEAVENUMBERS


## Reporting issue / Feature (new pattern)

To report issue please use the issue template in the repo to follow.

## To Contribute

To contribute please create a pull request

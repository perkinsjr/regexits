[![Build Status](https://travis-ci.com/perkinsjr/regexits.svg?branch=master)](https://travis-ci.com/perkinsjr/regexits)


<div align="center">
	<h2>
		Regexits a light weight regex npm package for common used regex matches
	</h2>
	<br>
</div>

## To install

    npm install regexits

## To Use

    const regexits = require('regexits')

    regexits(string, pattern)

## Quick Example

    const regexits = require('regexits')

    regexit('012-34-5678', 'SSN')
  
    returns true

## Patterns that are current available  

<a  href="https://www.patreon.com/james_perkins">
	<img style="text-align: center;" src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

* DateSlashes
* Time24hr
* Date
* ISO8601DT
* HTMLtag
* HEXColor
* URLSlug
* SrcImgTag
* URL
* Email
* Password
* PosInt
* NegInt
* Integer
* PosNum
* NegNum
* Num
* PhoneNum
* NewLine
* CSSComment
* USCAZip
* SSN
* EMAIL
* IPV4
* IPV6
* IPV4ORV6
* VISA
* MASTERCARD
* AMEX
* DINERS
* DISCOVER
* JCB   
* POBOX
* SHA256
* SHA1
* MD5
* MAINNET
* TESTNET
* GITHUB


## Reporting issue / Feature (new pattern)

To report issue please use the issue template in the repo to follow.

## To Contribute

To contribute please create a pull request

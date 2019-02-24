[![Build Status](https://travis-ci.com/perkinsjr/regexit.svg?branch=master)](https://travis-ci.com/perkinsjr/regexit)

<div align="center">
	<h2>
		Regexits a light weight regex npm package for common used regex matches
	</h2>
	<br>
	<p>
		<a href="https://www.patreon.com/james_perkins">My open source work is supported by the community, become a sponser today!</a>
	</p>
</div>

## To install

    npm install regexits

## To Use

    const regexits = require('regexits')

    regexits(string, pattern)

## Quick Example

    const regexits = require('regexits')

    regexit('012-34-5678', 'SSN')

## Patterns that are current usable 

* DateSlashes
* Time24hr
* ISO8601DT
* HTMLtag
* HEXColor
* URLSlug
* SrcImgTag
* URL
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
* InternationalPhone
* VISA
* MASTERCARD
* AMEX
* DINERS 
* DISCOVER
* JCB


## Reporting issue / Feature (new pattern)

To report issue please use the issue template in the repo to follow.

## To Contribute

To contribute please create a pull request

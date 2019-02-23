# Regexit

Regexit is a lightweight package to handle Regex of commonly needing to be checked.


[My Open source is supported by the community, Become a sponsor today](https://www.patreon.com/james_perkins)

## To install

    npm install regexit

## To Use

    const regexit = require('regexit')

    regexit(string, pattern)

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

## Quick Example

    const regexit = require('regexit')

    regexit('012-34-5678', 'SSN')


## Reporting issue / Feature (new pattern)

To report issue please use the issue template in the repo to follow.

## To Contribute

To contribute please create a pull request

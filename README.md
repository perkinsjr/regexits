<div align="center">
	<div>
		Regexit a light weight regex npm package for common used regex matches
	</div>
	<br>
	<p>
		<a href="https://www.patreon.com/james_perkins">My open source work is supported by the community, become a sponser today!</a>
	</p>
</div>

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

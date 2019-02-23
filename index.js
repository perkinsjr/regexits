const regexMap = {
    DateSlashes: /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/ ,
    Time24hr: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/ ,
    ISO8601DT: /^(?![+-]?\d{4,5}-?(?:\d{2}|W\d{2})T)(?:|(\d{4}|[+-]\d{5})-?(?:|(0\d|1[0-2])(?:|-?([0-2]\d|3[0-1]))|([0-2]\d{2}|3[0-5]\d|36[0-6])|W([0-4]\d|5[0-3])(?:|-?([1-7])))(?:(?!\d)|T(?=\d)))(?:|([01]\d|2[0-4])(?:|:?([0-5]\d)(?:|:?([0-5]\d)(?:|\.(\d{3})))(?:|[zZ]|([+-](?:[01]\d|2[0-4]))(?:|:?([0-5]\d)))))$/ ,
    HTMLtag: /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/ ,
    HEXColor: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/ ,
    URLSlug: /^[a-z0-9-]+$/ ,
    SrcImgTag: /^<\s*img[^>]+src\s*=\s*(["'])(.*?)\1[^>]*>$/ ,
    URL: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ ,
    PosInt: /^\d+$/ ,
    NegInt: /^-\d+$/ ,
    Integer: /^-?\d+$/ , 
    PosNum: /^\d*\.?\d+$/ ,
    NegNum: /^-\d*\.?\d+$/ , 
    Num: /^-?\d*\.?\d+$/ ,
    PhoneNum: /^\+?(\d.*){3,}$/ , 
    NewLine: /[\r\n]|$/ ,
    CSSComment: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\// , 
    USCAZip: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/ ,
    SSN: /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/
}

function regexify(input,pattern) {
    let string = input;
    let patternToMatch = regexMap[pattern];

    if (patternToMatch === undefined)
        return 'no pattern ' + pattern + ' available'
    
        return patternToMatch.test(string);
    
}


module.exports = regexify

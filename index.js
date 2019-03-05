const helper = require('./helper/helper')

function regexits(input, pattern) {
    let string = input;
    let patternToMatch = helper[pattern];
    if (patternToMatch === undefined)
        return 'no pattern ' + pattern + ' available'

    return patternToMatch.test(string);

}

module.exports = regexits

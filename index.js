const regexpatterns = require('./helper/regexpatterns');
const stringpattern = require('./helper/stringpattern');


function match(input, pattern) {
    let string = input;
    let patternToMatch = regexpatterns[pattern];
    if (patternToMatch === undefined)
        return 'no pattern ' + pattern + ' available'

    return patternToMatch.test(string);

}

function removeFromString(input, pattern) {
  let string = input;
  let typeToRemove = stringpattern[pattern];


  return string.replace(typeToRemove,'');
}

  const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );

  

module.exports = 
{
  match,
  getURLParameters,
  removeFromString
};

const regexpatterns = require("./helper/regexpatterns");
const stringpattern = require("./helper/stringpattern");


function match(input, pattern) {
    let string = input;
    if (regexpatterns[pattern] === undefined)
        return "no pattern " + pattern + " available"

    return regexpatterns[pattern].test(string);

}

function removeFromString(input, pattern) {

  return input.replace(stringpattern[pattern],"");
}

const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a),
    {}
  );

  

module.exports = 
{
  match,
  getURLParameters,
  removeFromString
};

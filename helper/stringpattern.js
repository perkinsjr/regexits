const patterns = {
    SPECIALCHARS: /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi ,
    ALLWHITESPACE: /\s/g ,
    TRIMEND: /\s+$/ ,
    TRIMBEGIN: /^\s+/g ,
    REMOVENUMBERS: /[+-]?\d+(?:\.\d+)?/g ,
    LEAVENUMBERS: /\D/g
}
module.exports = patterns;
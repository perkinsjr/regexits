import regexits from './index'
import test from 'ava';

test('DateSlashes', t => {
    const mapTest = regexits.match('01/01/2014','DateSlashes');
    t.is(true,mapTest);
} )

test('Time24hr', t => {
    const mapTest = regexits.match('19:00','Time24hr');
    t.is(true,mapTest);
} )

test('Date', t => {
    const mapTest = regexits.match('01-01-2014','Date');
    t.is(true,mapTest);
} )

test('ISO8601DT', t => {
    const mapTest = regexits.match('2012-10-06T04:13:00+00:00','ISO8601DT');
    t.is(true,mapTest);
} )

test('HTML Tag', t => {
    const mapTest = regexits.match('<div></div>','HTMLtag');
    t.is(true,mapTest);
} )
test('Hex Color', t => {
    const mapTest = regexits.match('#4286f4','HEXColor');
    t.is(true,mapTest);
} )

test('URLSlug', t => {
    const mapTest = regexits.match('this-that-other-outre-collection','URLSlug');
    t.is(true,mapTest);
} )

test('SrcImgTag', t => {
    const mapTest = regexits.match('<img src="">','SrcImgTag');
    t.is(true,mapTest);
} )

test('URL', t => {
    const mapTest = regexits.match('https://www.regexit.com','URL');
    t.is(true,mapTest);
} )

test('Email', t => {
    const mapTest = regexits.match('james_r_perkins@tuta.io','Email');
    t.is(true,mapTest);
} )

test('Password', t => {
    const mapTest = regexits.match('Password1!','Password');
    t.is(true,mapTest);
} )

test('PosInt', t => {
    const mapTest = regexits.match('100','PosInt');
    t.is(true,mapTest);
} )

test('NegInt', t => {
    const mapTest = regexits.match('-100','NegInt');
    t.is(true,mapTest);
} )

test('Integer', t => {
    const mapTest = regexits.match('-100','Integer');
    t.is(true,mapTest);
} )

test('PosNum', t => {
    const mapTest = regexits.match('100.00','PosNum');
    t.is(true,mapTest);
} )

test('NegNum', t => {
    const mapTest = regexits.match('-100.00','NegNum');
    t.is(true,mapTest);
} )

test('Num', t => {
    const mapTest = regexits.match('-100.00','Num');
    t.is(true,mapTest);
} )

test('PhoneNum', t => {
    const mapTest = regexits.match('555-555-5555','PhoneNum');
    t.is(true,mapTest);
} )

test('NewLine', t => {
    const mapTest = regexits.match('\n','NewLine');
    t.is(true,mapTest);
} )

test('CSSComment', t => {
    const mapTest = regexits.match('/* */','CSSComment');
    t.is(true,mapTest);
} )

test('USCAZip', t => {
    const mapTest = regexits.match('06340','USCAZip');
    t.is(true,mapTest);
} )

test('SSN', t => {
    const mapTest = regexits.match('013-48-5659','SSN');
    t.is(true,mapTest);
} )

test('IPV4', t => {
    const mapTest = regexits.match('192.0.2.1','IPV4');
    t.is(true,mapTest);
} )

test('IPV6', t => {
    const mapTest = regexits.match('02001:0db8:85a3:0000:0000:8a2e:0370:73346340','IPV6');
    t.is(true,mapTest);
} )

test('IPV4ORV6', t => {
    const mapTest = regexits.match('192.1.2.4','IPV4ORV6');
    t.is(true,mapTest);
} )

test('Visa', t => {
    const mapTest = regexits.match('4111756955551234','VISA');
    t.is(true,mapTest);
} )

test('MasterCard', t => {
    const mapTest = regexits.match('5126756955551234','MASTERCARD');
    t.is(true,mapTest);
} )

test('Amex', t => {
    const mapTest = regexits.match('378734493671000','AMEX');
    t.is(true,mapTest);
} )

test('DINERS', t => {
    const mapTest = regexits.match('30569309025904','DINERS');
    t.is(true,mapTest);
} )

test('DISCOVER', t => {
    const mapTest = regexits.match('6011111111111117','DISCOVER');
    t.is(true,mapTest);
} )

test('JCB', t => {
    const mapTest = regexits.match('3566002020360505','JCB');
    t.is(true,mapTest);
} )

test('POBOX', t => {
    const mapTest = regexits.match('PO Box', "POBOX");
    t.is(true,mapTest);
})

test('POBOX1', t => {
    const mapTest = regexits.match('Post Office Box 123', "POBOX");
    t.is(true,mapTest);
})

test('SHA256', t => {
    const mapTest = regexits.match('7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069', "SHA256");
    t.is(true,mapTest);
})

test('SHA1', t => {
    const mapTest = regexits.match('2ef7bde608ce5404e97d5f042f95f89f1c232871', "SHA1");
    t.is(true,mapTest);
})

test('MD5', t => {
    const mapTest = regexits.match('00236a2ae558018ed13b5222ef1bd987', "MD5");
    t.is(true,mapTest);
})

test('GITHUB', t => {
    const mapTest = regexits.match('ssh://user@host.xz:port/path/to/repo.git/', "GITHUB");
    t.is(true,mapTest);
})

test('MAINNET', t => {
    const mapTest = regexits.match('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq', "MAINNET");
    t.is(true,mapTest);
})

test('TESTNET', t => {
    const mapTest = regexits.match('2NCLmdnrxQErmJJPmGaSaE7NxuYKMNnYcxW', "TESTNET");
    t.is(true,mapTest);
})

test('get URL Parameters', t => {
    const parameter = regexits.getURLParameters('http://url.com/page?name=Adam&surname=Smith');
    t.deepEqual(parameter, {name: 'Adam',surname: 'Smith',});
})

test('Remove All Special Chars', t => {
    const strippedString = regexits.removeFromString('REGEXITS&IS&*^%GREAT' , 'SPECIALCHARS');
    t.deepEqual(strippedString, 'REGEXITSISGREAT');
})

test('Remove All White Space', t => {
    const strippedString = regexits.removeFromString('REGE XITS IS GREAT  ' , 'ALLWHITESPACE');
    t.deepEqual(strippedString, 'REGEXITSISGREAT');
})

test('Trim End White Space', t => {
    const strippedString = regexits.removeFromString('      REGEXITS IS GREAT    ' , 'TRIMEND');
    t.deepEqual(strippedString, '      REGEXITS IS GREAT');
})

test('Trim Begin White Space', t => {
    const strippedString = regexits.removeFromString('     REGEXITS IS GREAT    ' , 'TRIMBEGIN');
    t.deepEqual(strippedString, 'REGEXITS IS GREAT    ');
})

test('Remove All Numbers', t => {
    const strippedString = regexits.removeFromString('     REGE5634324XITS IS52353 GREA55454T    ' , 'REMOVENUMBERS');
    t.deepEqual(strippedString, '     REGEXITS IS GREAT    ');
})

test('Leave All Numbers', t => {
    const strippedString = regexits.removeFromString('     REGE5634324XITS IS52353 GREA55454T    ' , 'LEAVENUMBERS');
    t.deepEqual(strippedString, '56343245235355454');
})

test('nopattern', t => {
    const mapTest = regexits.match('011-55-9087','NOTHING');
    t.is(mapTest,'no pattern ' + 'NOTHING' + ' available');
} )

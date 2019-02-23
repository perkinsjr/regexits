import regexify from './index'
import test from 'ava';

test('DateSlashes', t => {
    const mapTest = regexify('01/01/2014','DateSlashes');
    t.is(true,mapTest);
} )

test('Time24hr', t => {
    const mapTest = regexify('19:00','Time24hr');
    t.is(true,mapTest);
} )

test('Date', t => {
    const mapTest = regexify('01-01-2014','Date');
    t.is(true,mapTest);
} )

test('ISO8601DT', t => {
    const mapTest = regexify('2012-10-06T04:13:00+00:00','ISO8601DT');
    t.is(true,mapTest);
} )

test('HTML Tag', t => {
    const mapTest = regexify('<div></div>','HTMLtag');
    t.is(true,mapTest);
} )
test('Hex Color', t => {
    const mapTest = regexify('#4286f4','HEXColor');
    t.is(true,mapTest);
} )

test('URLSlug', t => {
    const mapTest = regexify('this-that-other-outre-collection','URLSlug');
    t.is(true,mapTest);
} )

test('SrcImgTag', t => {
    const mapTest = regexify('<img src="">','SrcImgTag');
    t.is(true,mapTest);
} )

test('URL', t => {
    const mapTest = regexify('https://www.regexit.com','URL');
    t.is(true,mapTest);
} )

test('Email', t => {
    const mapTest = regexify('james_r_perkins@tuta.io','Email');
    t.is(true,mapTest);
} )

test('Password', t => {
    const mapTest = regexify('Password1!','Password');
    t.is(true,mapTest);
} )

test('PosInt', t => {
    const mapTest = regexify('100','PosInt');
    t.is(true,mapTest);
} )

test('NegInt', t => {
    const mapTest = regexify('-100','NegInt');
    t.is(true,mapTest);
} )

test('Integer', t => {
    const mapTest = regexify('-100','Integer');
    t.is(true,mapTest);
} )

test('PosNum', t => {
    const mapTest = regexify('100.00','PosNum');
    t.is(true,mapTest);
} )

test('NegNum', t => {
    const mapTest = regexify('-100.00','NegNum');
    t.is(true,mapTest);
} )

test('Num', t => {
    const mapTest = regexify('-100.00','Num');
    t.is(true,mapTest);
} )

test('PhoneNum', t => {
    const mapTest = regexify('555-555-5555','PhoneNum');
    t.is(true,mapTest);
} )

test('NewLine', t => {
    const mapTest = regexify('\n','NewLine');
    t.is(true,mapTest);
} )

test('CSSComment', t => {
    const mapTest = regexify('/* */','CSSComment');
    t.is(true,mapTest);
} )

test('USCAZip', t => {
    const mapTest = regexify('06340','USCAZip');
    t.is(true,mapTest);
} )

test('SSN', t => {
    const mapTest = regexify('013-48-5659','SSN');
    t.is(true,mapTest);
} )

test('IPV4', t => {
    const mapTest = regexify('192.0.2.1','IPV4');
    t.is(true,mapTest);
} )

test('IPV6', t => {
    const mapTest = regexify('02001:0db8:85a3:0000:0000:8a2e:0370:73346340','IPV6');
    t.is(true,mapTest);
} )

test('IPV4ORV6', t => {
    const mapTest = regexify('192.1.2.4','IPV4ORV6');
    t.is(true,mapTest);
} )

test('Visa', t => {
    const mapTest = regexify('4111756955551234','VISA');
    t.is(true,mapTest);
} )

test('MasterCard', t => {
    const mapTest = regexify('5126756955551234','MASTERCARD');
    t.is(true,mapTest);
} )

test('Amex', t => {
    const mapTest = regexify('378734493671000','AMEX');
    t.is(true,mapTest);
} )

test('DINERS', t => {
    const mapTest = regexify('30569309025904','DINERS');
    t.is(true,mapTest);
} )

test('DISCOVER', t => {
    const mapTest = regexify('6011111111111117','DISCOVER');
    t.is(true,mapTest);
} )

test('JCB', t => {
    const mapTest = regexify('3566002020360505','JCB');
    t.is(true,mapTest);
} )

test('nopattern', t => {
    const mapTest = regexify('011-55-9087','NOTHING');
    t.is(mapTest,'no pattern ' + 'NOTHING' + ' available');
} )

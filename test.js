import regexits from './index'
import test from 'ava';

test('DateSlashes', t => {
    const mapTest = regexits('01/01/2014','DateSlashes');
    t.is(true,mapTest);
} )

test('Time24hr', t => {
    const mapTest = regexits('19:00','Time24hr');
    t.is(true,mapTest);
} )

test('Date', t => {
    const mapTest = regexits('01-01-2014','Date');
    t.is(true,mapTest);
} )

test('ISO8601DT', t => {
    const mapTest = regexits('2012-10-06T04:13:00+00:00','ISO8601DT');
    t.is(true,mapTest);
} )

test('HTML Tag', t => {
    const mapTest = regexits('<div></div>','HTMLtag');
    t.is(true,mapTest);
} )
test('Hex Color', t => {
    const mapTest = regexits('#4286f4','HEXColor');
    t.is(true,mapTest);
} )

test('URLSlug', t => {
    const mapTest = regexits('this-that-other-outre-collection','URLSlug');
    t.is(true,mapTest);
} )

test('SrcImgTag', t => {
    const mapTest = regexits('<img src="">','SrcImgTag');
    t.is(true,mapTest);
} )

test('URL', t => {
    const mapTest = regexits('https://www.regexit.com','URL');
    t.is(true,mapTest);
} )

test('Email', t => {
    const mapTest = regexits('james_r_perkins@tuta.io','Email');
    t.is(true,mapTest);
} )

test('Password', t => {
    const mapTest = regexits('Password1!','Password');
    t.is(true,mapTest);
} )

test('PosInt', t => {
    const mapTest = regexits('100','PosInt');
    t.is(true,mapTest);
} )

test('NegInt', t => {
    const mapTest = regexits('-100','NegInt');
    t.is(true,mapTest);
} )

test('Integer', t => {
    const mapTest = regexits('-100','Integer');
    t.is(true,mapTest);
} )

test('PosNum', t => {
    const mapTest = regexits('100.00','PosNum');
    t.is(true,mapTest);
} )

test('NegNum', t => {
    const mapTest = regexits('-100.00','NegNum');
    t.is(true,mapTest);
} )

test('Num', t => {
    const mapTest = regexits('-100.00','Num');
    t.is(true,mapTest);
} )

test('PhoneNum', t => {
    const mapTest = regexits('555-555-5555','PhoneNum');
    t.is(true,mapTest);
} )

test('NewLine', t => {
    const mapTest = regexits('\n','NewLine');
    t.is(true,mapTest);
} )

test('CSSComment', t => {
    const mapTest = regexits('/* */','CSSComment');
    t.is(true,mapTest);
} )

test('USCAZip', t => {
    const mapTest = regexits('06340','USCAZip');
    t.is(true,mapTest);
} )

test('SSN', t => {
    const mapTest = regexits('013-48-5659','SSN');
    t.is(true,mapTest);
} )

test('IPV4', t => {
    const mapTest = regexits('192.0.2.1','IPV4');
    t.is(true,mapTest);
} )

test('IPV6', t => {
    const mapTest = regexits('02001:0db8:85a3:0000:0000:8a2e:0370:73346340','IPV6');
    t.is(true,mapTest);
} )

test('IPV4ORV6', t => {
    const mapTest = regexits('192.1.2.4','IPV4ORV6');
    t.is(true,mapTest);
} )

test('Visa', t => {
    const mapTest = regexits('4111756955551234','VISA');
    t.is(true,mapTest);
} )

test('MasterCard', t => {
    const mapTest = regexits('5126756955551234','MASTERCARD');
    t.is(true,mapTest);
} )

test('Amex', t => {
    const mapTest = regexits('378734493671000','AMEX');
    t.is(true,mapTest);
} )

test('DINERS', t => {
    const mapTest = regexits('30569309025904','DINERS');
    t.is(true,mapTest);
} )

test('DISCOVER', t => {
    const mapTest = regexits('6011111111111117','DISCOVER');
    t.is(true,mapTest);
} )

test('JCB', t => {
    const mapTest = regexits('3566002020360505','JCB');
    t.is(true,mapTest);
} )

test('nopattern', t => {
    const mapTest = regexits('011-55-9087','NOTHING');
    t.is(mapTest,'no pattern ' + 'NOTHING' + ' available');
} )

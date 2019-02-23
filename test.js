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

test('Visa', t => {
    const mapTest = regexify('4111756955551234','VISA');
    t.is(true,mapTest);
} )

test('nopattern', t => {
    const mapTest = regexify('011-55-9087','NOTHING');
    t.is(mapTest,'no pattern ' + 'NOTHING' + ' available');
} )

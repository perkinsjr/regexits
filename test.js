import regexify from './index'
import test from 'ava';

test('regex', t => {
    const mapTest = regexify('049-13-7556','SSN');
    t.is(true,mapTest);
} )

test('nopattern', t => {
    const mapTest = regexify('049-13-7556','NOTHING');
    t.is(mapTest,'no pattern ' + 'NOTHING' + ' available');
} )

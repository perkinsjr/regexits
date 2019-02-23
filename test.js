import regexify from './index'
import test from 'ava';

test('regex', t => {
    const mapTest = regexify('049-13-7556','SSN');
    t.is(true,mapTest);
} )

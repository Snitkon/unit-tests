const merge = require('../tasks/_merge')

describe('Merge function:', () => {
    const object = {
        'a': [{ 'b': 2 }, { 'd': 4 }]

    };
 
    const other = {
        'a': [{ 'c': 3 }, { 'e': 5 }]

    };

    test('Function should return combined object, destination object with source objects', () => {
        expect(merge(object, other)).toEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
        expect(merge({ 'a': [{ 'b': 2 }, { 'd': 4 }] }, {})).toEqual({ 'a': [{ 'b': 2 }, { 'd': 4 }] });
    })

    test('Function should return original object if the secend argument is not entered', () => {
        expect(merge(object)).toEqual(object)
    })

    test('Function should return empty object if the first or second arguments is it empty object', () => {
        expect(merge({}, {})).toEqual({})
    })
})

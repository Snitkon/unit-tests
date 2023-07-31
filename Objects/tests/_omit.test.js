const omit = require('../tasks/_omit')

describe('Omit function:', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };

    test('Function should return empty object if origianl object is empty or all elements from second parameter match keys of object', () => {
        expect(omit(object, ['a', 'b', 'c'])).toEqual({});
        expect(omit({}, ['a'])).toEqual({});
    })

    test('Function should return object if the second argument not is entered', () => {
        expect(omit(object)).toEqual(object);
    })

    test('Function should return object with properties that are not omitted', () => {
        expect(omit(object, ['c'])).toEqual({ 'a': 1, 'b': '2' });
        expect(omit(object, ['a', 'b'])).toEqual({ 'c': 3 });
        expect(omit(object, [])).toEqual(object);
    })

});
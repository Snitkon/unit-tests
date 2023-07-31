const omitBy = require('../tasks/_omitBy');


describe('OmitBy function:', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };

    test('Function should return empty object', () => {
        expect(omitBy({}, (element) => typeof element === 'string')).toEqual({});
        expect(omitBy(object, (element) => element < 50)).toEqual({});
    })

    test('Function should return empty object if the predicat is not entered', () => {
        expect(omitBy(object)).toEqual({});
    })

    test('Function should creates object that predicate doesn`t return truthy', () => {
        expect(omitBy(object, (element) => typeof element === 'string')).toEqual({ 'a': 1, 'c': 3 });
        expect(omitBy(object, (element) => typeof element === 'number')).toEqual({ 'b': '2' });
    })

});
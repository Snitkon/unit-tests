const pickBy = require('../tasks/_pickBy');

describe('PickBy function:', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };

    test('Function should return empty object if the predicat is not entered', () => {
        expect(pickBy(object)).toEqual({});
    })

    test('Function should return empty object', () => {
        expect(pickBy({}, (element) => typeof element === 'string')).toEqual({});
        expect(pickBy({ 'c': 3 }, (element) => typeof element === 'string')).toEqual({});
        expect(pickBy(object, (element) => element > 50)).toEqual({});
    })


    test('Function should creates object that predicate does return truthy', () => {
        expect(pickBy({ 'a': 80, 'b': 2, 'c': 3 }, (element) => element > 50)).toEqual({ 'a': 80 });
        expect(pickBy(object, (element) => typeof element === 'number')).toEqual({ 'a': 1, 'c': 3 });
        expect(pickBy({ 'a': 90, 'b': 2, 'c': 70 }, (element) => element > 50)).toEqual({ 'a': 90, 'c': 70 });
    })

});
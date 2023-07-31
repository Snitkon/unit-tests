const pick = require('../tasks/_pick')

describe('Pick function', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };

    test('Function should return empty object', () => {
        expect(pick(object, [])).toEqual({})
        expect(pick(object, 50)).toEqual({})
    })
    
    test('Function should return empty object if second parametr is not entered', () => {
        expect(pick(object)).toEqual({})
    })

    test('Function should return object include picked elements', () => {
        expect(pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 })
        expect(pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'h'])).toEqual({ 'a': 1 })
    })

})
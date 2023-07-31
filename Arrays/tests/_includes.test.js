const includes = require('../tasks/_includes')

describe('Includes function:', () => {
    test('Function should return true if value is found, else false if the collection is string', () => {
        expect(includes('abcd', 'bc')).toEqual(true)
    })

    test('Function should return true if value is found, else false if the collection is array', () => {
        expect(includes([1, 2, 3], 1)).toEqual(true)
    })

    test('Function should return true if value is found, else false if the collection is object', () => {
        expect(includes({ 'a': 1, 'b': 2 }, 1)).toEqual(true)
    })

    test('Function should return true if value is found, else false if the collection is any and fromIndex is entered', () => {
        expect(includes([1, 2, 3], 1, 2)).toEqual(false)
        expect(includes({ 'a': 1, 'b': 2 }, 2, 1)).toEqual(true)
        expect(includes('abcd', 'cd', 2)).toEqual(true)
    })
})
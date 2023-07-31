const zip = require('../tasks/_zip')

describe('Zip function:', () => {
    test('Fucntion should return the new array of grouped elements', () => {
        expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]])
    })

    test('Function should return empty array if the argument is empty', () => {
        expect(zip()).toEqual([])
    })

    test('Function should return new array if the argument have unequal length', () => {
        expect(zip(['a', 'b'], [1], [true])).toEqual([['a', 1, true], ['b']])
    })
})
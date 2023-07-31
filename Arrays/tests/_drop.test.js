const drop = require('../tasks/_drop')

describe('Drop function:', () => {
    test('Function should return an empty array', () => {
        expect(drop([], 1)).toEqual([])
        expect(drop([], 4)).toEqual([])
        expect(drop([1,2,3], 10)).toEqual([])
        expect(drop([1,2], 'ads')).toEqual([])
    })

    test('Function should return array reduced from the beginning on the quantity the numbers of elements to drops', () => {
        expect(drop([1,3,2,5], 2)).toEqual([2,5])
        expect(drop([1,'a',2,5], 3)).toEqual([5])
        expect(drop([1,2,3,4], 0)).toEqual([1,2,3,4])
    })

    test('Function should return array reduced on one element from the beginning if the quantity missing', () => {
        expect(drop([1,2,3])).toEqual([2,3])
        expect(drop([1,2,'b',5])).toEqual([2,'b',5])
    })

})
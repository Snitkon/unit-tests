const take = require('../tasks/_take')

describe('Take function:', () => {
    test('Function should return array created from "n" elements took from the beginning of the original array', () => {
        expect(take([1,2,3,4,5], 3)).toEqual([1,2,3])
        expect(take([1,'b',3,'t',5], 4)).toEqual([1,'b',3,'t'])
    })

    test('Function should return array with first element took from the beginning of the original array if the quantity undefined', () => {
        expect(take([3,4,2,5])).toEqual([3])
        expect(take([7,5,3,9,6,2])).toEqual([7])
    })

    test('Function should return original array if the quantity of requested element greater than or equal array size', () => {
        expect(take([3,4,7,8,5], 5)).toEqual([3,4,7,8,5])
        expect(take([3,4,7,8,5,2,9], 21)).toEqual([3,4,7,8,5,2,9])
    })

    test('Function should return empty array if the quantity of requested elements equal 0', () => {
        expect(take([4,2,6,7,4], 0)).toEqual([])
        expect(take([8,5,7,3,5,6,3], 0)).toEqual([])
    })
})

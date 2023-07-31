const chunk = require('../tasks/_chunk')

describe('Chunk function:', () => {
    test('Function should return the original array if size is greater than or equal to the array size', () => {
        expect(chunk([1,2,3,4,5], 100)).toEqual([1,2,3,4,5])
        expect(chunk([1,2,3,4,'a'], 5)).toEqual([1,2,3,4,'a'])
    })

    test('Function should return new array with chunky from old array specified size', () => {
        expect(chunk([1,2,3,4], 2)).toEqual([[1,2],[3,4]])
        expect(chunk([1,2,3,4,5,6], 3)).toEqual([[1,2,3],[4,5,6]])
    })

    test('Function should return empty array if the original array is empty', () => {
        expect(chunk([], 3)).toEqual([])
        expect(chunk([])).toEqual([])
    })

    test('Function should return new array as chunk into group of 1 size', () => {
        expect(chunk([1,2,3,4,5])).toEqual([[1],[2],[3],[4],[5]])
        expect(chunk([1,'a',3,4,5, 'g', 'h'])).toEqual([[1],['a'],[3],[4],[5],['g'],['h']])
    })

    test ('Function should return new chunk an array into groups where the final chunk will be remaining elements if array cant be split evenly', () => {
        expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]])
        expect(chunk([1,2,3,4,5,'f','t'], 3)).toEqual([[1,2,3],[4,5,'f'],['t']])
    })
})
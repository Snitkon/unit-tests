const compact = require('../tasks/_compact')

describe('Compact function:', () => {
    test('Function should return new array which havent falsely values', () => {
        expect(compact([1,null,3,4,5, undefined, 10, '', 23, null, false, 0, -1])).toEqual([1,3,4,5,10,23,-1])
    })

    test('Function should return empty array if the original array is empty', () => {
        expect(compact([])).toEqual([])
    })

    test('Function should return empty array if the original array have only falsely values', () => {
        expect(compact([0,null,undefined,false,'',NaN])).toEqual([])
    })
})
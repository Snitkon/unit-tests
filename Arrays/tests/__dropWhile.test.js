const dropWhile = require('../tasks/_dropWhile')

describe('DropWhile function:', () => {
    const user = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ]
    test('Function should return array without drop elements if the predicate is function', () => {
        expect(dropWhile(user, function(item) {return !item.active})).toEqual([{ user: 'pebbles', active: true }])
    })

/*     test('Function should return array without drop elements if the predicate is object', () => {
        expect(dropWhile()).toEqual()
    })

    test('Function should return array without drop elements if the predicate is array', () => {
        expect(dropWhile()).toEqual()
    })

    test('Function should return array without drop elements if the predicate is string', () => {
        expect(dropWhile()).toEqual()
    }) */

})
const filter = require('../tasks/_filter')

describe('Filter function:', () => {
    const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
    ];

    test('Function should return new array with elements which match the conditions of the predicate if the predicate is function', () => {
        expect(filter(users, function(item) {return !item.active})).toEqual([{ user: 'fred', age: 40, active: false }])
    })

    test('Function should return new array with elements which match the conditions of the predicate if the predicate is object', () => {
        expect(filter(users, { age: 36, active: true })).toEqual([{ user: 'barney', age: 36, active: true }])
    })

    test('Function should return new array with elements which match the conditions of the predicate if the predicate is array', () => {
        expect(filter(users, ['active', false])).toEqual([{ user: 'fred', age: 40, active: false }])
    })

    test('Function should return new array with elements which match the conditions of the predicate if the predicate is string', () => {
        expect(filter(users, 'active')).toEqual([{ user: 'barney', age: 36, active: true }])
    })

    test('Function should return original array if predicate is undefined', () => {
        expect(filter(users)).toEqual(users)
    })
})

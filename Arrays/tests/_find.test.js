const find = require('../tasks/_find')

describe('Find function:', () => {
    const users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
    ];

    test('Function should return elements which match the conditions of the predicate if the predicate is function', () => {
        expect(find(users, function(o) { return o.age < 40; })).toEqual({ user: 'barney', age: 36, active: true })
    })

    test('Function should return underfined if predicate is undefined', () => {
        expect(find(users)).toEqual(undefined);
    });

    test('Function should return elements which match the conditions of the predicate if the predicate is object', () => {
        expect(find(users, { 'age': 1, 'active': true })).toEqual({ user: 'pebbles', age: 1,  active: true })
    })

    test('Function should return element when look for if fromIndex is entered', () => {
        expect(find(users, function (element) { return element.age < 40; }, 1)).toEqual({ user: 'pebbles', age: 1, active: true });
        expect(find(users, ['active', false], 2)).toEqual(undefined);
    })

    test('Function should return elements which match the conditions of the predicate if the predicate is array', () => {
        expect(find(users, ['active', false])).toEqual({ user: 'fred', age: 40, active: false })
    })

    test('Function should return elements which match the conditions of the predicate if the predicate is string', () => {
        expect(find(users, 'active')).toEqual({ user: 'barney', age: 36, active: true })
    })
})


const map = require('../tasks/_map')

describe('Map function:', () => {
    function square(n) {
        return n * n;
    }

    var users = [
        { 'user': 'barney' },
        { 'user': 'fred' }
    ];

    test('Function should return the new mappeed array if the iteratee is string and collection is array of objects', () => {
        expect(map(users, 'user')).toEqual(['barney', 'fred'])
    })

    test('Function should return the new mapped array if the iteratee is function and collection is array', () => {
        expect(map([4, 8], square)).toEqual([16, 64])
    })

    test('Function should return empty array if the iteratee is undefinde', () => {
        expect(map(users)).toEqual([])
    })

    test('Function should return the new mapped array if the iteratee is function and collection is object', () => {
        expect(map({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64])
    })

})
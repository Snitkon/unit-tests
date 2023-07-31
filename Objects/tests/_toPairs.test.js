const toPairs = require('../tasks/_toPairs')

describe('ToPairs function:', () => {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }
 
    Foo.prototype.c = 3;

    test('Function should return is empty array', () => {
        expect(toPairs()).toEqual([])
    })

    test('Function should return array with of key-value pairs from object', () => {
        expect(toPairs(new Foo)).toEqual([['a', 1], ['b', 2]])
    })

})
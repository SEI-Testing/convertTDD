let convert = require('../src/converter');

describe('converter lengths', function () {

    it('should convert m into m', function() {
        expect(convert(5, 'm')).toEqual(5);
    })
});
var expect = require('chai').expect;
var app = require('../app/app');

describe('find maximum of array', function ()
{
    describe('when parameters are correct ', function ()
    {
        it('should return max value', function ()
        {
            expect(app.findMax([1, 2, 3, 4, -5 ])).to.eql(4);
        });
    });
    describe('when parameters are wrong', function ()
    {
        it('should return false', function ()
        {
            expect(app.findMax([6, 3, 'a'])).to.eql(false);
        });
    });

});
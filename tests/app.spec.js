var expect = require('chai').expect;
var app = require('../app/app');

it('should find max element of array', function()
{
    expect(app.findMin([5,2,3,4,1,9,8,7,6])).to.eql({min: 1});
});

it('should return false if any of elements is not a number', function()
{
    expect(app.findMin([1,2,3,'x'])).to.eql(false);
});
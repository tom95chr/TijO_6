var expect = require('chai').expect;
var app = require('../app/app');
it('when parameters is not a number ', function(){
    expect(app.findMax([1,2,3,4,'a'])).to.eql(false);
});


it('should find max element of array', function (){
    expect(app.findMax(array)).to.eql({min: 10});
});

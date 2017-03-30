'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('calculateDiscount', function ()
{
    describe('when parameters are negative numbers', function ()
    {
        it('should return false', function ()
        {
            expect(app.calculateTicketsPrice(-5, 0, 6)).to.eql(false);
        });
    });
    describe('when parameters are correct', function ()
    {
        it('should calculate ticket price without discount', function ()
        {
            expect(app.calculateTicketsPrice(5, 0, 6)).to.eql({totalPrice: 30});
        });
        it('should calculate ticket price with discount', function ()
        {
            expect(app.calculateTicketsPrice(5, 2, 6)).to.eql({totalPrice: 24, discount: 6});
        });
    });
});

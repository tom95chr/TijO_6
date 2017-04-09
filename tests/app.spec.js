'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('checking primality', function ()
{
    describe('if the number is prime', function ()
    {
        it('should return true', function ()
        {
            expect(app.isPrime(3)).to.eql(true);
        });
    });

    describe('if the number is not prime', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime(4)).to.eql(false);
        });
    });

    describe('if parameter is not a number',function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime("a")).to.eql(false);
        });
    });
    describe('if parameter is not int',function ()
    {
        it('should return true', function ()
        {
            expect(app.isPrime(3.0)).to.eql(true);
        });
    });
});

describe('calculating the area of trapezoid',function ()
{
    describe('if parameters are correct',function ()
    {
        it('should calculate area of trapezoid', function ()
        {
            expect(app.areaOfTrapezoid(2,3,4)).to.eql(10);
        });

    });
    describe('if parameters are not correct',function ()
    {
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(-2,3,4)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(2,-3,4)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(2,3,-4)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid('a',3,4)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(2,'x',4)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(2,3,'a')).to.eql(false);
        });
    });
});

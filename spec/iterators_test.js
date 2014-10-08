var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });
});

describe('Iterators',function(){
  describe('#min',function() {
    
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67,34];
    });

    it('should return the minimum in an array', function() {
      // Call function that I want to test
      var result = Iterators.min(myArr);
      // After test, result should be 22
      expect(result).to.equal(22);
    });
  });  
});

describe('Iterators',function() {
  describe('#each', function(){
    var myArr;
    beforeEach(function(){
      myArr = [1,2,3];
    });

    it("should return an action to each value in array", function() {
      var sum = 0;

      // call my each with a function that adds current element to sum
      Iterators.each(myArr, function (item){
        sum += item; 
      });
      // When done, sum is expected to be 6
      expect(sum).to.equal(6);

    });   
  });
});

describe('Iterators',function(){
  describe('#map', function(){
    var myArr;
    beforeEach(function(){
      myArr = [2,4,8,10];
    });

    var timesTwo = function(x) {
      return x*2;
    };

    it('should create a new array of value*2', function() {
      var result = Iterators.map(myArr,timesTwo);

      expect(result).to.deep.equal([4,8,16,20]);
    });

  });
});


describe('Iterators', function() {
  describe('#filer', function(){
    var myArr;
    beforeEach(function(){
      myArr = [1,3,6,10];
    });

    var timesTwo = function(num){
      return num*2;
    };
    
    it('should return numbers multipled by two', function(){
    expect(Iterators.filter(myArr, timesTwo)).to.equal([2,6,12,20]);  
    });
  });
});


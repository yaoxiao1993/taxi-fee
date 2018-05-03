//const main = require('../main/main');
'use strict';
var getTaxiFee = require('../main/main');

describe('taxi fee', function () {
    var taxiFee1 = 6;
    var taxiFee2 = 9;
    var taxiFee3 = 15;

    it('两公里以内价格', function(){
        var expectFee = getTaxiFee(2, 0);
        expect(expectFee).toEqual(taxiFee1);
    });

    it('2公里到8公里价格', function(){
        var expectFee = getTaxiFee(6, 1);
        expect(expectFee).toEqual(taxiFee2);
    })

    it('8公里以上价格', function(){
        var expectFee = getTaxiFee(9, 10);
        expect(expectFee).toEqual(taxiFee3);
    })
    
    // write your tests here...
});

const assert=require('chai').assert;
const ly=require('../../utility/utility');

describe('LeapYear', function(){
    it('input should not be a string',function(){
        let result=ly.leapYear("xyz");
        assert.equal(result,"input must be a number");
    });
    it('input should not be a null',function(){
        let result=ly.leapYear();
        assert.equal(result,"input must be a number");
    });
    it('input should not be undefined',function(){
        let result=ly.leapYear(undefined);
        assert.equal(result,"input must be a number");
    });
    /*it('input should not be boolean',function(){
        let result=ly.leapYear(false);
        assert.equal(result,"input must be a number");
    });*/

    /*it('input length should be equal to 4',function(){
        let result=ly.leapYear(123);
        assert.equal(result,'input length must be equal to 4');
     });*/
     /*it('input length should be equal to 4',function(){
        let result=ly.leapYear(12345);
        assert.equal(result,'input length must be equal to 4');
     });*/
});
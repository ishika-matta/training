const assert=require('chai').assert;
const un=require('../../utility/utility');

describe('Replace string with User Name', function(){
    /*it('input string length must be >=3',function(){
        let result=un.userName("aa");
        assert.equal(result,"input string length must be >=3");
    });*/
    it('input should not be a number',function(){
        let result=un.userName(12345);
        assert.equal(result,"input must be a string");
    });
    it('input should not be a null',function(){
        let result=un.userName(null);
        assert.equal(result,"input must be a string");
    });
    it('input should not be undefined',function(){
        let result=un.userName(undefined);
        assert.equal(result,"input must be a string");
    });
    it('input should not be boolean',function(){
        let result=un.userName(true);
        assert.equal(result,"input must be a string");
    });
});

const assert=require('chai').assert;
const bp=require('../../utility/utility');

describe('Balanced Paranthensis', function(){  
   it('more than 2 inputs put together',function(){
        let result=bp.balancedParam('(2+2+2)');
        assert.equal(result,"invalid");
    });
   it('no braces',function(){
        let result=bp.balancedParam('2+2');
        assert.equal(result,"invalid");
    }); 
});
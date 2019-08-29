const assert=require('chai').assert;
const g=require('../../utility/utility');

describe('Gambler game', function(){
    
    /*it('input should be number',function(){
        let result=g.gambler(20,30,50);
        assert.typeOf(result,'number');
    });*/
    
   it('stake should be less than goal',function(){
        let result=g.gambler(20,18,50);
        assert.equal(result,"stake is > goal hence game cannot be played");
    });
   it('inputs must be positive',function(){
        let result=g.gambler(0,0,-9);
        assert.equal(result,"inputs cannot be 0 or negative");
    });
    

    
    it('input should not be a string',function(){
        let result=g.gambler("");
        assert.equal(result,"input must be a number");
    });
    it('input should not be a null',function(){
        let result=g.gambler(null);
        assert.equal(result,"input must be a number");
    });
    it('input should not be undefined',function(){
        let result=g.gambler(undefined);
        assert.equal(result,"input must be a number");
    });
    it('input should not be boolean',function(){
        let result=g.gambler(true);
        assert.equal(result,"input must be a number");
    });
});

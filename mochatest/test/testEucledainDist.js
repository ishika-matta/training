const assert=require('chai').assert;
const ed=require('../../utility/utility');

describe('Eucledain Distance', function(){
    it('input should be number',function(){
        let result = ed.eucledainDist(parseInt(6),parseInt(8));
        assert.equal(result,10.0);
    });
    it('input should not be a string',function(){
        let result=ed.eucledainDist("xyz","abc");
        assert.equal(result,"input should be number");
    });
    it('input should not be a null',function(){
        let result=ed.eucledainDist(null);
        assert.equal(result,"input should be number");
    });
    it('input should not be undefined',function(){
        let result=ed.eucledainDist(undefined);
        assert.equal(result,"input should be number");
    });
    it('input should not be boolean',function(){
        let result=ed.eucledainDist(false);
        assert.equal(result,"input should be number");
    });
});
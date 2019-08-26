const assert=require('chai').assert;
const distance1=require('../appDistance');

describe('Distance app',function(){
    it('App should return type number',function(){
        let distanceResult=distance1.Distance1();
        assert.typeOf(distanceResult,'number');
    });

    it("Test Post Request", function(done) {
        this.timeout(100000);
   });
});
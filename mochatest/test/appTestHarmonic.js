const assert=require('chai').assert;
const harmonic0=require('/home/user/Desktop/ishika-matta/HarmonicNumber');

describe('Harmonic app',function(){
    it('App Harmonic should return type number',function(){
        let resultHarmonic=harmonic0.harmonicNth();
        assert.typeOf(resultHarmonic,'number');
    });
});

const assert=require('chai').assert;
var cm=require('../../oops/cliniqueManagement');

describe('Clinique Management', function(){

    
   it('patient Id must be a number',function(){
        let result=cm.patientData().patientId;
        console.log(result);
        assert.equal(result,"patient Id must be a number");
    });
   
});
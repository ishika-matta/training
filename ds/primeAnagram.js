const util=require('../utility/utility');
var prime=util.printPrime();
var i=0;
var j=0;
var k=-1;
var ana=[];
var bool;
for(i=0;i<prime.length;i++){
    for(j=0;j<prime.length;j++){
    bool=util.checkAnagram(prime[i].toString(10),prime[j].toString(10));
    if(bool==true){
        //ana[k]=prime[i];
        k++;
        ana[k]=prime[j];
    }
}

    }
console.log(ana);

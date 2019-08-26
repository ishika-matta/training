var readline=require('readline-sync');

var str=readline.question("Enter a string: ");
var permute=[];
var result=[];
function swap(str1,str2){
    //var temp=str1;
    //str1=str2;
    //str2=temp;
    var swapped=[];
    //console.log(swapped.push(str2));
    //console.log(swapped.push(str1));
    swapped.push(str2);
    swapped.push(str1);
    return swapped;
}

function permuteString(str)
{
    

    if(str.length===0){
       result.push(str);
    return result;}
    else{
        for(var i=0;i<str.length;i++){
            var char=str[i];
            var remaining=str.slice(0,i)+str.slice(i+1);
            //console.log(remaining);
            for(var j=0;j<remaining.length;j++){
                //console.log(remaining[j]);
                 permute=swap(remaining[j],remaining[j+1]);
                console.log(permute);
                result.push(char+permute);
            }
        }
   }
    return result;

}
//permuteString(str)
console.log(permuteString(str));
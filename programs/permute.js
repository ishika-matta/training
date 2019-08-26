var readline=require('readline-sync');

var str=readline.question("Enter a string: ");
function swap(str, first, last){
    
}

function permute(str,startIndex,endIndex)
{
    if(startIndex==endIndex){
        console.log(str);
    }

    else{
        for(var i=startIndex;i<str.length;i++){
            swap(str,str[startIndex],str[i]);
            permute(str,startIndex+1,endIndex);
            swap(str,str[startIndex],str[i]);
        }
    }
}

permute(str,0,str.length);
var readline=require('readline-sync');
var a=require('../utility/utility');
console.log("Enter the no of array elements");
var n=a.input();
var arr=new Array(n);

function readArr(){
for(var i=0;i<n;i++){
    arr[i]=readline.question("Enter array element at: "+i+" location: ");
    //mergeSort(arr,0,n-1);
}
};

function mergeSort(arr, i, j){
    var mid=(i+j)/2;
    mergeSort(arr,i,mid);
    mergeSort(arr,mid+1,j);
    mergeArr(arr,i,mid,mid+1,j);
};

function mergeArr(arr,i1, j1, i2, j2){
    var i=i1;
    var j=i2;
    var k=0;
    var temp=[];

    while(i<=j1 &&j<=j2){
        if(arr[i]<arr[j])
        temp[k++]=arr[i++];
        else
        temp[k++]=arr[j++];
    }

    while(i<=j1)
    temp[k++]=arr[i++];

    while(j<=j2)
    temp[k++]=arr[j++];

    for(i=i1,j=0;i<=j2;i++,j++)
    arr[i]=temp[j];
};

function printArr(){
    for(i=0;i<n;i++)
		console.log(a[i]);
};

    
readArr();
mergeSort(arr,0,n-1);
printArr();
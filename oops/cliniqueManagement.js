var fs = require('fs');
var util=require('../utility/utility');
var n=0;
var i=0;
var doc=[];
var j=0;
var pat=[];
var count;
var freq=[];
const readline=require('readline-sync');
    var docContent = fs.readFileSync('doctors.json', 'utf8');
    var objDoc = JSON.parse(docContent);
   // console.log(objDoc);


    function searchDoc(){
        var ipd=readline.question("Enter to search for doc: ");
        for(var i=0;i<objDoc.length;i++){
        if(objDoc[i].docName===ipd ||objDoc[i].docId==ipd ||objDoc[i].docSpecialization===ipd ||objDoc[i].docAvailability==ipd)
        
        return(objDoc[i]);
    }
}
//console.log(searchDoc());
var patContent = fs.readFileSync('patient.json', 'utf8');
    var objPat = JSON.parse(patContent);
   // console.log(objPat);

function searchPatient(){
    var ipp=readline.question("Enter to search for patient: ");
    for(var i=0;i<objPat.length;i++){
    if(objPat[i].patientName===ipp ||objPat[i].patientId==ipp ||objPat[i].patientMobile===ipp ||objPat[i].patientAge==ipp)
     return(objPat[i]);
}
}
function takeAppointment(){
    while(true){
    n=readline.question("Enter 1 to continue and 0 to exit: ");
    if(n==1){
        doc[i]=searchDoc().docName;
        i++;
    console.log(doc);
    for(var l=0;l<doc.length;l++){
        count=1;
        for(var m=l+1;m<doc.length;m++){
            if(doc[l]==doc[m]){
                count++;
                freq[m]=0;
            }
        }
        if(freq[l]!=0)
        freq[l]=count;  
        if(freq[l]||freq[m]==2)
        {
        console.log("No more than 5 appointments");   
        
    }
    }
    console.log(freq);
    
    
    pat[j]=searchPatient().patientName;
    j++;
    console.log(pat);
    }
    else
    return;
    
}
}

//console.log(searchPatient());
takeAppointment();
/*
    interface docData{
        docName:string;
        docId:number;
        docSpecialization:string;
        docAvailability:string;
    }
    */
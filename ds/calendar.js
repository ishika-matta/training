const util=require('../utility/utility');
const readline=require('readline-sync');
var myArgs=process.argv.slice(2);
var m=parseInt(myArgs[0]);
var y=parseInt(myArgs[1]);
var months=[" ","January","February","March","April","May","June","July","August","September","October","November","December"];
var days=[0,31,28,31,30,31,30,31,31,30,31,30,31];

if(m==2 && util.leapYear(year)) day[m]=29;
var d=util.dayOfWeek(m,1,y);

console.log("Month: "+months[m]+" Year: "+y);
console.log("Sun Mon Tue Wed Thr Fri Sat");

for(var i=0;i<d;i++){
    console.log(" cdc");
}
//process.stdout.write("");
  /*  for(var i=1;i<days[m];i++){
        process.stdout.write(i);
        if((i+d)%7==0 || i==days[m]) console.log();
    }
}*/

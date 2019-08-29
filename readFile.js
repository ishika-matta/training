const fs=require('fs');

fs.readFile('input_file.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);   
})
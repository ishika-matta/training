const fs=require('fs');
let data="Writing to a file";
fs.writeFile('output.txt',data,(err)=>{
    if (err) throw err;
})

const fs=require('fs')
// fs.writeFile('message.txt','hello their we can ', (err)=>{
// if(err) throw err;
// console.log('the file has been written');
// } );
// console.log('hello');
fs.readFile("./message.txt",'utf8',(err,data)=>{
if(err)throw err;
console.log(data);
})
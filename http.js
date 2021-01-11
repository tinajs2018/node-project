const http=require('http')
const server=http.createServer(( req ,res)=>{
 if(req.url==='/'){
     res.write('welcome to the homepage')
     res.end();
 }
 if(res.url==='/user'){
     res.write('welcome user to the land of fantasy');
     res.end();
 }
});
server.listen(3000,()=> console.log('the server is up and running'));
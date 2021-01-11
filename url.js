const { Console } = require('console');
const url=require('url');
const address='https://Localhost/default.html?year2017&month=february';
const parsedurl=url.parse(address,true);
console.log(parsedurl.host);
console.log(parsedurl.pathname);
console.log(parsedurl.protocol);

console.log(parsedurl.search);
console.log(parsedurl.port);
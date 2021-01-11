 let add =function(x,y){
     return x+y;
 } 
 console.log(add (2,8));
 //Arrow function
 let sum=(x,y)=>x+y;
 console.log(sum(12,7));
 let student=(x,y)=>x+y;
 console.log(student('karimi','christine'))
 console.log(typeof student)
 //normal function of sorting the data in descending order;
let numbers=[4,2,6];
numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers);
//arrrow fuction;
let num=[2,6,8];
num.sort((a,b)=>b-a);
console.log(num);
let names=['michael','janet','marcie','carlo'];
let lenght=names.map(names=>name.lenght);
console.log(length)
let days=(x,z)=>x*z*x;
console.log(days(3,7));
//
let setcolor=function(color){
    return{value:color}
};
let backgroundColor=setcolor('red');
console.log(backgroundColor.value);

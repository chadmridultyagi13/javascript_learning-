// -> strings -> dono chalega ' ' or "" 
const name = "mridul" 
const repocount = 50 
// console.log(name + repocount + " value") -> mridul50 value
// to concatenate this way is outdated 
// we do string interpolation , we make placeholders for variable and inject variable inside the string , hence able to do the concatenation 
// now i will give example of string interpolation 
/* const variable = "world";
const message = `Hello, ${variable}!`;
console.log(message); // Output: Hello, world! */
// alternative way to declare string -> let name = new String("mridul") ;  , here string is a object and key - value pairs will be stored -> 0 - 'm', 1 - 'r', 2 - 'i'.........
// and some more properties and methods will also will be available 
// to access protoype -> console.log(name.__proto__) -> {} (object)
// -> all methods(matlab functions) can be accessed
//  console.log(name.length) , console.log(name.toUpperCase()) , console.log(name.charAt(2))->i , console.log(name.indexof('r'))
// const newname = name.substring(0,4) (4 is not included) ; const newname = name.slice(0,4) , 4 not included 
// trim -> used to emit start and end whitespaces and also removes end line character slash n , trim start aur trim end bhi hota hai pls see it at mdn 
// accha ham yeh saareh methods jo use kareh hai , isse original string par koi farak nhi padega 
// replace method -> only the first occurence  is replaced 
// includes method bhi hota hai 
// split -> split(separator,limit) , limit -> no of splits to be included 
// pls study methods from mdn of the strings 




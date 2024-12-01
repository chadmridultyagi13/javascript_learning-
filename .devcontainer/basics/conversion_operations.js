let score = 33 
// console.log(typeof score) , console.log(typeof(score)) -> yeh doh methods hai 
let num = "33" 
// now conversion 
let value = Number(num)  // iska type number hai
console.log(typeof value)
// lekin 
let num1 = "33abc" 
let val = Number(num1) 
console.log(typeof val)
// -> NaN -> not a number store hua hai val mai , lekin typeof nikalega val ka voh number aaega 
// maanlo num1 = null hota then val will store 0 , agar num1 = undefined , then again NaN 
// boolean mai samaj gaya hi hoga 
// strings -> NaN
// NOW BOOLEAN 
let num2 = 0 ; 
let bool = Boolean(num2) 
// 0 -> false 
// 1 -> true 
// "" -> false 
// string which is !empty() then -> true 
// AB STRINGS 
// 33 -> "33" , 
 

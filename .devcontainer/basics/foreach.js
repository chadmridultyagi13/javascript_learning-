// kuch loop array ke properties ke andar directly inject kardiye jaate hai -> they are called forEach loop , waise ek map bhi hota hai
/*
forEach ek higher order function hai 
const arr = [21,23,4,3,2]
arr.forEach(function (val){
console.log(val)}) -> iss forEach ke andar ham basically ek call back function , aur uska obviously koi naam nhi hoga , aur val jo hai voh denote kar rha hai hamare array ke individual elements ko denote 
arrow funciton -> 
arr.forEach((item)=>{
    console.log(val)})
through simple function call -> 

function print(item){
console.log(item)
}
arr.forEach(print) -> this is also a way , yaha ham bas reference dete hai naki execute karte hai 

arr.forEach((num,ind,arr)=>{
    console.log(num,ind,arr)}) ----> multiple parameters 
// objects ke case mai forEach ->
maanlo diya hua hai -> ek object obj 
so to apply for loop on it ->
obj.forEach((item)=>{
    console.log(item.language)})
*/

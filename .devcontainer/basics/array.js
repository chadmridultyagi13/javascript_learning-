// const array = [1,2,34] -> iske andar multiple type ke elemnts bhi ho sakte hai
// arrays are resizeable
// jab bhi copy operations hote hai toh shallow(reference) copy banti hai
// indexing hoti hai 
// const arr = new Array(1,2,3,4) , we get a prototype access aur uss prototype ke andar further ek prototype hota hai , and ek property of length ka bhi access hamko milta hai 
// puri array bhi print kar sakte hai , .push(), .pop() bhi available hai apne pass 
// arr.unshift(0) -> array ke start mai add 0 kardete hai and baaki saari values bhi shift ho jaati hai by one unit 
// arr.shift()->shuru mai pop
// arr.includes(9) -> checks value inside the array or not 
// arr.indexOf(9) -> 9 ka index / else -1 agar not exist 
// arr.join() -> this joins the array and converts into the string 
// slice , splice 
// slice -> .slice(1,3) -> 1 se 2 tak array ke elements le leti hai aur original array mai koi dikkat nhi hogi 
// .splice(1,3) -> 1 se 3 take array ke elements le leta hai aur original array sirf 0,4,5 index waalo ko leti hai array 
// browser ke console par jakar you can see the methods and functions 
// const allheros = marvel.concat(dcheros) ; -> isme marvel ke andar piche se dcheros concat hojayenge , ek new array allhero banjayegi
// one more method -> spread method , const allheros = [...marvel,...dcheros]
// const real_array = another_array.flat() , in brackets we put in depth , it can be infinity as well , agar array ke andar array embeded hai uss case mai work karta hai 
// console.log(Array.isArray("hitesh")) -> andar check karenge ki array ha ya nhi -> true and false mai answer dega 
// console.log(Array.from("hitesh")) -> array print hojayegi with containing the letters h,i,t,e,s,h
// console.log(Array.from({name:"hitesh"})) -> yaha [] array banegi // interesting case
// console.log(Array.of(score1,score2,score3)) -> making a array from the set of variables



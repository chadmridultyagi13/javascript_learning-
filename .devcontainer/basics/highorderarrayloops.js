/*
for(const iterator of object){        -> here object kuch bhi hosakta hai , jahe string , array and many more things 
}


*/
/*
maps 
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
const map = new Map() ; 
map.set('IN','INDIA')  -> pehli key hoti hai dusri value 
*/
/*

for(const u of map){
console.log(u)
}-> this will print all [key,value] -> like this is a bracket
but to print individually we have to destructure the array 
for(const [key,value] of map){
console.log(key,':-',value)
}


*/
// for objects the looping cannot happen like above , so we use forin loop instead of forof loop 
/*const obj = {
    mridul : 2 , 
    china : 3
}
for(const num in obj){
    console.log(num) 
}
    this is the method to print keys , to print values , just to do this -> obj[num]
we can apply this in array as well , uss case mai num -> indices dega , aur arr[num] -> individual values
map par iteration nhi kar sakte forin method se 
*/

//const tinderuse = new Object()  
// tinderuse.id = "123abc" , tinderuse.name = "sammy" , iss tarah se bhi add kar sakte hai
// object ke anddar object ->
/* const regularuser = {
fullname : {
firstname : "hitesh"
}
}
console.log(regularuser.name.firstname) -> to access this 
*/
// const object3 = Object.assign({},obj1, obj2,.........objn)  -> all objects will be accumulated in a target object {} , if this parameter did not given than , all will be accumulate inside the obj1 (returned target(object3) == target(obj1))
// const object3 = {...obj1,...obj2,...3,,,,,,,...objn} -> spread method 
// array of objects -> 
/* const obj3 = [{
id : 1 , email : "h@gmail.com"},{ id2 : 2 , email : "mridul_t@bt.iitr.ac.in"},{},{}.....] , now to access value at index i , obj3[i].email
*/
// to get array of keys inside the object -> console.log(Object.keys(tinderuser)) , similarly for values also 
// console.log(Object.entries(tinderuser)) -> ek array hai jiske andar bohot saari aise -> [key,value] arrays stored hai 
// console.log(tinderuser.hasOwnProperty("isLoggedIn")) -> basically keys check karte hai , ki voh key exist karti hai nhi -> gives answer in true and false 
 
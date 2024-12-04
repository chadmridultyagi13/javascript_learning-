// two ways to declare object -> one literal way and one constructor way
// singleton -> constructor se banta hai , literal se nhi banta hai 
// object literal ------- 
// const Jsuser = {} -> inke andar key and value waala chakar hota hai 
// har ek key value pair ke baad , comma daalte hai 
//In JavaScript, the keys of an object (or properties) can only be of two types: strings and symbol
//  String Keys -> By default, any key provided in an object literal or assigned dynamically is treated as a string.Even if you use a number or other type as a key, it will be automatically converted to a string.
// In an object, the values can be any valid JavaScript data type, including: //Primitive types (string, number, boolean, null, undefined, symbol, bigint).Complex types (object, array, function).Nested structures combining all of the above.
// const Jsuser = { name : "hitesh", "mridul":12} -> here name will be treated as "name" by default 
//  to access values -> Jsuser.name or Jsuser["name"] , Jsuser["mridul"] -> this is only method to access value with the key mridul 
// to declare symbol -> const mysym = Symbol("key1") -> mysym is symbol of "key1" 
// now we have to use symbol as a key , syntax -> Jsuser { [mysym]:"mykey1"} , now to access it we will write-> console.log(jsuser[mysym]) ; 
// now to change values -> Jsuser.name = some new value 
// to prevent the value change -> Object.freeze(jsuser) ;-> iske baad kuch bhi kareh kuch change nhi hoga values 
// to directly print the object -> console.log(jsuser) 
// now to add function  as variables 
// jsuser.greeting = function(){console.log("hello js user")}  -> yaha we are adding greetings












 // how the data is put into the memory and acessed , the datatypes are categoried into two types -> primitive and non primitive 
 // primitive------->
 // primitive data copy hota hai memory se and changes copy mai hote hai na ki asli memory mai 
 // 7 types -> string, number , boolean ,null(empty, no memory), undefined(variable declared hai but kya usme value aayegi yeh declared nhi hai, also memory is declared), symbol,BigInt 

// reference (non primitive) 
// isko samaj hi gaya hoga exactly memory par jaakar changes 
// array , objects , functions
//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
// alag se int , float ... nhi hai sab number hai 
// sirf variable declare kardega tabhi undefined rahegi value , let value = undefined , yeh manual tarika hai 
// const bigNumber = 2314372762356n -> apne aap BigInt ban gaya hai 
// console.log(typeof bigNumber) -> undefined ,  console.log(typeof null) -> object 
// function ka datatype -> function(but isko bola jata hai object function) , undefined ka -> undefined 
// jitne bhi non primitive type hai inka jo return type hota hai voh aata hai object 
// ----------------------------- abh memory ka discussion 
// stack(primitive) -> yaha jo vhi variable declare hua hai hame uska copy milta hai and heap memory(non primitive) -> yaha original value ka reference milta hai
// baaki video se dekhio

